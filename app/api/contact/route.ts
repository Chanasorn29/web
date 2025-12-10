// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // รองรับทั้ง JSON หรือ form-data
    const data = req.body;
    const email = data.email || (req.body.get && req.body.get("email")); // form-data fallback
    const message = data.message || (req.body.get && req.body.get("message"));

    if (!email || !message) {
      return res.status(400).json({ error: "Missing email or message" });
    }

    // Debug log
    console.log("=== Debug Form Data ===");
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("=======================");

    // สร้าง nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail ของคุณ
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // ส่งเมล
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Message",
      text: `Email: ${email}\nMessage:\n${message}`,
    });

    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.error("Error sending mail:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
