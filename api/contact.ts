// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = "neupanekiran512@gmail.com";

const GMAIL_USER = process.env.MAIL_USER;
const GMAIL_PASSWORD = process.env.MAIL_PASSWORD;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  if (!GMAIL_USER || !GMAIL_PASSWORD) {
    console.error("ERROR: Mail server credentials not found in environment variables.");
    return res.status(500).json({ success: false, error: 'Server configuration error.' });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `<h3>New Contact Message</h3><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone || 'N/A'}</p><p><b>Message:</b></p><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
}