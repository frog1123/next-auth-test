import { db } from '@/lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const password = await hash(data.password, 12);
    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password
      }
    });

    return new NextResponse('Success', { status: 200 });
  } catch (err) {
    console.log('user create error', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
