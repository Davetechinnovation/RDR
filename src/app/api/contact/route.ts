import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure the email transport using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com', // Zoho's SMTP server
  port: 465, // Zoho's secure SMTP port
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_EMAIL, // Your Zoho email
    pass: process.env.ZOHO_APP_PASSWORD, // Your Zoho app password (not your regular password)
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Prepare email options
    const mailOptions = {
      from: process.env.ZOHO_EMAIL, // Sender address (your Zoho email)
      to: process.env.ZOHO_EMAIL, // List of recipients (your email)
      replyTo: email, // User's email as reply-to
      subject: `New Contact Form Submission (RDR General Construction) from ${name}`,
      text: `
        You have a new contact form submission:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This message was sent from RDR General Construction website's contact form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 0.9em;">
            This message was sent from RDR General Construction website's contact form.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
