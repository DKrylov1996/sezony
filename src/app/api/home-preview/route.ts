import { NextResponse } from 'next/server';
import { requireAdminSession } from '@/lib/auth';
import { setHomePreviewData } from '@/lib/previewStore';
import type { HomeContent } from '@/lib/homeContent';

export async function POST(request: Request) {
  try {
    await requireAdminSession();
  } catch {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  const body = (await request.json()) as HomeContent;
  const key = setHomePreviewData(body);
  return NextResponse.json({ key });
}
