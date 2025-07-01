// src/app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { to, subject, text } = body;

    if (!to || !subject || !text) {
      return new Response(JSON.stringify({ message: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"GWKind Website Message" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    return new Response(JSON.stringify({ message: "Email sent", info }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return new Response(
      JSON.stringify({ message: "Server error", error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
