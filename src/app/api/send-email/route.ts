// src\app\api\send-email\route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { subject, to, data } = await req.json();

  try {
    await resend.emails.send({
      from: 'Aenigm3 Labs <noreply@aenigm3labs.com>',
      to: to || 'sanju.peramuna@gmail.com',
      subject: subject || 'New Form Submission',
      html: Object.entries(data)
        .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
        .join(''),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
