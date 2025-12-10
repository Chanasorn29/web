import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1. อ่านข้อมูลจาก Request (ใน App Router ต้องใช้ await request.json())
    const data = await request.json();
    const { email, message } = data;

    // ตรวจสอบข้อมูล
    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing email or message" },
        { status: 400 }
      );
    }

    // Debug log
    console.log("=== Debug Form Data ===");
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("=======================");

    // 2. สร้าง nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. ส่งเมล
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Message",
      text: `Email: ${email}\nMessage:\n${message}`,
    });

    // 4. ส่ง Response กลับ (ใช้ NextResponse)
    return NextResponse.json({ status: "success" }, { status: 200 });

  } catch (err) {
    console.error("Error sending mail:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}