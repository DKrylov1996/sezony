import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { contactSchema } from '@/lib/validators';

export async function POST(request: Request) {
  const data = await request.json();
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || 'Некорректные данные' },
      { status: 400 }
    );
  }

  await prisma.contactRequest.create({
    data: {
      name: parsed.data.name,
      phone: parsed.data.phone || null,
      email: parsed.data.email || null,
      message: parsed.data.message
    }
  });

  return NextResponse.json({ ok: true });
}
