import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    console.log("DEBUG: Body received:", body);

    // 📩 Email to YOU
    const msgToMe = {
      to: "reply@velocloudai.com", // must be verified in SendGrid
      from: "david@velocloudai.com", // must be verified in SendGrid
      subject: `New Contact Form Submission from website – ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        Message: ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await sgMail.send(msgToMe);

    // 📩 Auto-reply back to the visitor
    const autoReply = {
      to: email, // send to the person who filled the form
      from: "david@velocloudai.com", // must be verified in SendGrid
      subject: "Thanks for contacting VeloCloud AI!",
      text: `Hi ${name}, thanks for reaching out to VeloCloud AI. We'll get back to you as soon as possible.`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out to <strong>VeloCloud AI</strong>. We’ve received your message and will get back to you shortly.</p>
        <p>Best regards,<br/>VeloCloud AI Team</p>
      `,
    };

    await sgMail.send(autoReply);

    return NextResponse.json({ success: true, message: "Emails sent successfully!" });
  } catch (error: any) {
    console.error("SendGrid error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
