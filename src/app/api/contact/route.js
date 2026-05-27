import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, message, subject } = await request.json();

        //  SMTP configure
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // email setup
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email, 
            subject: `Portfolio: [${subject}]`,
            text: message,
            html: `
  <div style="background-color: #f6f9fc; padding: 40px 10px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #eef2f6;">
      
      <div style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 30px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">New Portfolio Message</h2>
        <p style="color: rgba(255, 255, 255, 0.8); margin: 5px 0 0 0; font-size: 14px;">Someone wants to connect with you!</p>
      </div>

      <div style="padding: 30px; color: #334155;">
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; width: 30%; font-weight: 600; color: #64748b;">Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #a855f7; text-decoration: none; font-weight: 500;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b;">Subject:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 500;">${subject}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; border-left: 4px solid #a855f7; padding: 20px; border-radius: 0 8px 8px 0;">
          <h4 style="margin: 0 0 10px 0; color: #475569; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</h4>
          <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap; font-size: 15px;">${message}</p>
        </div>

      </div>

      <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; color: #94a3b8; font-size: 12px;">This email was sent from your Portfolio Contact Form.</p>
        <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 12px;">&copy; ${new Date().getFullYear()} Munna. All rights reserved.</p>
      </div>

    </div>
  </div>
`
        };

        // sent email in mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}