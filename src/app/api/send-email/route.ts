// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // body akan berisi data dari form, seperti:
    // { name, email, phone, subject, message, product, quantity, unit }
    console.log("Menerima data formulir:", body);

    const { name, email, phone, subject, message, product } = body;

    // Pastikan data penting ada
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Data tidak lengkap." },
        { status: 400 }
      );
    }

    // Kirim email menggunakan Resend
    const { data, error } = await resend.emails.send({
      from: "Batu Pasir Jaya <onboarding@resend.dev>", // Alamat 'from' default dari Resend
      to: ["fadilahfarhan80@gmail.com"], // GANTI DENGAN EMAIL ANDA!
      subject: subject || `Permintaan Penawaran Baru: ${product}`,
      html: `
        <div>
          <h3>Anda menerima pesan baru dari website!</h3>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Telepon:</strong> ${phone}</p>` : ""}
          ${product ? `<p><strong>Produk:</strong> ${product}</p>` : ""}
          ${
            body.quantity
              ? `<p><strong>Jumlah:</strong> ${body.quantity} ${body.unit}</p>`
              : ""
          }
          <hr>
          <p><strong>Pesan:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Gagal mengirim email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Email berhasil dikirim!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server." },
      { status: 500 }
    );
  }
}
