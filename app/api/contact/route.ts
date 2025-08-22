import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // Debugging logs (will show up in Vercel Runtime Logs)
    console.log("DEBUG: SENDGRID_API_KEY present?", !!process.env.SENDGRID_API_KEY);
    console.log("DEBUG: From email:", process.env.FROM_EMAIL || "NOT SET");
    console.log("DEBUG: Body received:", body);

    const msg = {
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

    await sgMail.send(msg);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("SendGrid error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
