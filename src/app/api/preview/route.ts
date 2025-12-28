import { NextResponse } from 'next/server';
import { requireAdminSession } from '@/lib/auth';
import { setPreviewData, type PreviewData } from '@/lib/previewStore';

export async function POST(request: Request) {
  try {
    await requireAdminSession();
  } catch {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  const body = (await request.json()) as PreviewData;
  const key = setPreviewData(body);
  return NextResponse.json({ key });
}
