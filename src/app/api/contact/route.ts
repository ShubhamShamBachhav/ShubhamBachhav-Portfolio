import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (c) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c] as string)
  );
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, website } = await req.json();

    // ✅ Honeypot check (anti-spam)
    if (website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // ✅ Required fields check
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ NEW: Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ✅ NEW: Length limits (prevent abuse)
    if (
      name.length > 100 ||
      email.length > 200 ||
      message.length > 5000 ||
      (subject && subject.length > 200)
    ) {
      return NextResponse.json(
        { error: "Input too long" },
        { status: 400 }
      );
    }

    // ✅ Get headers safely
    const headersList = req.headers;

    const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "Unknown";
    const country = headersList.get("x-vercel-ip-country") || "Unknown";
    const city = headersList.get("x-vercel-ip-city") || "Unknown";
    const userAgent = headersList.get("user-agent") || "Unknown";
    const referer = headersList.get("referer") || "Direct";
    const timestamp = new Date().toISOString();

    // ✅ Escape user-supplied values before interpolating into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = subject ? escapeHtml(subject) : "No Subject";
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "shubhambachhavpatil@gmail.com"],
      subject: subject ? `Portfolio: ${subject}` : "New Portfolio Message",
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
        <hr/>
        <h3>Sender Info</h3>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Location:</strong> ${city}, ${country}</p>
        <p><strong>Browser:</strong> ${userAgent}</p>
        <p><strong>Referrer:</strong> ${referer}</p>
        <p><strong>Time:</strong> ${timestamp}</p>
      `,
      text: `New Contact Message

Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}
Message:
${message}

---
Sender Info
IP: ${ip}
Location: ${city}, ${country}
Browser: ${userAgent}
Referrer: ${referer}
Time: ${timestamp}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}