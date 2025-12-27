import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

function getS3Client() {
  const endpoint = process.env.S3_ENDPOINT;
  const accessKeyId = process.env.S3_ACCESS_KEY;
  const secretAccessKey = process.env.S3_SECRET_KEY;

  if (!endpoint || !accessKeyId || !secretAccessKey) {
    return null;
  }

  return new S3Client({
    region: process.env.S3_REGION || 'us-east-1',
    endpoint,
    credentials: { accessKeyId, secretAccessKey }
  });
}

export async function storeFile(options: {
  buffer: Buffer;
  filename: string;
  contentType: string;
}) {
  const client = getS3Client();
  const bucket = process.env.S3_BUCKET;

  if (client && bucket) {
    const key = `uploads/${options.filename}`;
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: options.buffer,
        ContentType: options.contentType
      })
    );

    const publicBase = process.env.S3_PUBLIC_URL || endpointToPublicUrl();
    if (!publicBase) {
      throw new Error('S3_PUBLIC_URL is not set');
    }
    return `${publicBase.replace(/\/$/, '')}/${key}`;
  }

  await mkdir(uploadDir, { recursive: true });
  const target = path.join(uploadDir, options.filename);
  await writeFile(target, options.buffer);
  return `/uploads/${options.filename}`;
}

function endpointToPublicUrl() {
  const endpoint = process.env.S3_ENDPOINT;
  if (!endpoint) return null;
  return endpoint.replace(/\/$/, '');
}
