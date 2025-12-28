import { NextResponse } from 'next/server';
import path from 'path';
import crypto from 'crypto';
import { storeFile } from '@/lib/storage';
import { getSession } from '@/lib/auth';
import sharp from 'sharp';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file');

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: 'Файл не найден' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const originalExtension = path.extname(file.name) || '.jpg';
  const isImage = file.type.startsWith('image/');
  const isVector = file.type === 'image/svg+xml';
  const isAnimated = file.type === 'image/gif';

  let outputBuffer = buffer;
  let extension = originalExtension;
  let contentType = file.type || 'application/octet-stream';

  if (isImage && !isVector && !isAnimated) {
    outputBuffer = await sharp(buffer)
      .rotate()
      .resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer();
    extension = '.webp';
    contentType = 'image/webp';
  }

  const filename = `${crypto.randomUUID()}${extension}`;

  const url = await storeFile({
    buffer: outputBuffer,
    filename,
    contentType
  });

  return NextResponse.json({ url });
}
