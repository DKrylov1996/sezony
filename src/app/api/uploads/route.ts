import { NextResponse } from 'next/server';
import path from 'path';
import crypto from 'crypto';
import { storeFile } from '@/lib/storage';
import { getSession } from '@/lib/auth';

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
  const extension = path.extname(file.name) || '.jpg';
  const filename = `${crypto.randomUUID()}${extension}`;

  const url = await storeFile({
    buffer,
    filename,
    contentType: file.type || 'application/octet-stream'
  });

  return NextResponse.json({ url });
}
