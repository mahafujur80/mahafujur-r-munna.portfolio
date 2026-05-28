import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message, subject } = await request.json();

    // SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Admin Email Options (আপনাকে যে মেইলটি পাঠাবে)
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio: [${subject}]`,
      text: message,
      html: `
  <div style="margin: 0; padding: 0; width: 100%; background-color: #f6f9fc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04); border: 1px solid #eef2f6;">
      
      <tr>
        <td style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 35px 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; line-height: 1.2;">
            New Portfolio Message
          </h2>
          <p style="color: rgba(255, 255, 255, 0.85); margin: 6px 0 0 0; font-size: 14px; font-weight: 500;">
            Someone wants to connect with you!
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding: 30px 24px; color: #334155;">
          
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 25px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; width: 25%; font-weight: 600; color: #64748b; font-size: 14px;">Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b; font-size: 14px;">Email:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px;">
                <a href="mailto:${email}" style="color: #a855f7; text-decoration: none; font-weight: 600;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #64748b; font-size: 14px;">Subject:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 500; font-size: 15px;"> ${subject}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #a855f7; padding: 20px; border-radius: 0 12px 12px 0; border-top: 1px solid #f1f5f9; border-right: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9;">
              <h4 style="margin: 0 0 6px 0; color: #475569; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; line-height: 1;">Message:</h4>
              <p style="margin: 0; color: #334155; line-height: 1.5; white-space: pre-wrap; font-size: 15px;">${message.trim()}</p>
          </div>

        </td>
      </tr>

      <tr>
        <td style="background-color: #fafafa; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.4;">
            This email was sent from your Portfolio Contact Form.
          </p>
          <p style="margin: 4px 0 0 0; color: #cbd5e1; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Munna. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>
`
    };

    // 2. Auto-Reply Email Options (ইউজার যে অটোমেটিক রিপ্লাই পাবে)
    const autoReplyOptions = {
      from: `"Munna Portfolio" <${process.env.EMAIL_USER}>`,
      to: email, // ইউজারের ইমেইল এড্রেস
      subject: "Thanks for contacting me 🚀",
      html: `
  <div style="margin: 0; padding: 0; width: 100%; background-color: #f6f9fc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(168, 85, 247, 0.06); border: 1px solid #f1f5f9;">
      <tr>
        <td style="padding: 0;">
          <!-- Top Decorative Bar -->
          <div style="height: 6px; background: linear-gradient(90deg, #a855f7 0%, #ec4899 100%);"></div>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px 24px; color: #334155;">
          
          <!-- Greeting -->
          <h2 style="margin-top: 0; margin-bottom: 16px; color: #0f172a; font-size: 22px; font-weight: 700; line-height: 1.3;">
            Hi ${name} 👋
          </h2>
          
          <!-- Main Message -->
          <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0 0 12px 0;">
            Thanks for reaching out! I appreciate you taking the time to write to me through my portfolio website.
          </p>
          <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0 0 24px 0;">
            I have safely received your message and will review it. Expect a response from me as soon as possible.
          </p>

          <!-- Subject Box -->
          <div style="margin: 24px 0; padding: 16px; background-color: #faf5ff; border-left: 4px solid #a855f7; border-radius: 4px;">
            <p style="margin: 0 0 4px 0; color: #701a75; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">
              Your Subject 
            </p>
            <p style="margin: 0; color: #581c87; font-size: 14px; font-weight: 500; line-height: 1.4;">
               ${subject}
            </p>
          </div>

          <!-- Divider -->
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 24px 0;" />

          <!-- Sign-off -->
          <p style="margin: 0 0 4px 0; color: #64748b; font-size: 13px; font-weight: 500;">
            Best Regards,
          </p>
          <h3 style="margin: 0; color: #a855f7; font-size: 18px; font-weight: 700;">
            Mahafujur Rahman Munna
          </h3>
          <p style="margin: 2px 0 0 0; color: #94a3b8; font-size: 13px;">
            Frontend & MERN Stack Developer
          </p>

        </td>
      </tr>
      <tr>
        <td style="background-color: #fafafa; padding: 20px 24px; text-align: center; border-top: 1px solid #f1f5f9;">
          <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.4;">
            This is an automated response to confirm receipt of your email.
          </p>
          <p style="margin: 4px 0 0 0; color: #cbd5e1; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Munna. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>
`
    };

    // Promise.all ব্যবহার করে দুটি ইমেইল একসাথে পাঠানো হচ্ছে
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    return NextResponse.json({ success: true, message: "Emails sent successfully!" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}