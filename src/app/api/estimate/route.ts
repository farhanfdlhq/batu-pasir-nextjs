// src/app/api/estimate/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("Gemini API key is not set.");
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: NextRequest) {
  try {
    const { projectDescription } = await request.json();

    if (!projectDescription) {
      return NextResponse.json(
        { error: "Project description is required" },
        { status: 400 }
      );
    }

    // --- PERUBAHAN: Prompt diterjemahkan ke Bahasa Indonesia ---
    const prompt = `Berdasarkan deskripsi proyek konstruksi berikut, berikan daftar rekomendasi material (pasir, batu, dll.), estimasi kuantitas, dan satuannya dalam Bahasa Indonesia. Balas HANYA dengan format array JSON yang valid, tanpa format markdown, komentar, atau teks percakapan tambahan. Proyek: "${projectDescription}"

    Skema JSON untuk setiap item dalam array harus sebagai berikut (kunci tetap dalam Bahasa Inggris):
    {
      "materialName": "nama material dalam Bahasa Indonesia (contoh: 'Pasir Cor')",
      "quantity": "estimasi kuantitas dalam bentuk string (contoh: '10-12')",
      "unit": "satuan dalam Bahasa Indonesia (contoh: 'm³', 'sak')",
      "notes": "catatan singkat dalam Bahasa Indonesia mengenai penggunaan material"
    }`;
    // -------------------------------------------------------------

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const startIndex = text.indexOf("[");
    const endIndex = text.lastIndexOf("]");

    if (startIndex === -1 || endIndex === -1) {
      throw new Error(
        "Respons dari AI tidak mengandung format JSON array yang valid."
      );
    }

    const jsonString = text.substring(startIndex, endIndex + 1);

    const materials = JSON.parse(jsonString);

    return NextResponse.json(materials);
  } catch (error) {
    console.error("--- ERROR DI SISI SERVER ---");
    console.error(error);
    console.error("---------------------------");

    let errorMessage = "Gagal memproses respons dari AI. Format tidak valid.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
