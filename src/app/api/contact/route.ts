import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, phone, serviceInterest, projectDescription } = body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your domain email address
        pass: process.env.SMTP_PASSWORD, // your domain email password
      },
    });

    // Verify the connection configuration
    try {
      await transporter.verify();
      console.log("Connection to email server established successfully!");
    } catch (error) {
      console.error("Error verifying email server connection:", error);
      return NextResponse.json({ message: "Failed to verify email server connection", status: 500 });
    }

    const mailOptions = {
      from: process.env.SMTP_USER, // sender address
      to: process.env.SMTP_RECEIVER, // list of receivers
      subject: 'New Contact Form Submission', // Subject line
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${serviceInterest}</p>
        <p><strong>Project Description:</strong> ${projectDescription}</p>
      `, // plain text body
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully', status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email', status: 500 });
  }
}