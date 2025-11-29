import { GoogleGenerativeAI } from "@google/generative-ai";
import { books } from "@/data/books";

// Inisialisasi API dengan Key dari .env
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Fungsi untuk menyiapkan konteks data buku
const getSystemPrompt = () => {
  const booksData = books.map(b => 
    `- Judul: ${b.title}, Mapel: ${b.subject}, Kelas: ${b.level} ${b.grade || ''}, Deskripsi: ${b.description}`
  ).join('\n');

  return `
    Anda adalah asisten AI untuk aplikasi perpustakaan digital bernama "EduVerseX Pro".
    
    Tugas Anda:
    1. Membantu siswa belajar dan menjawab pertanyaan akademis.
    2. Memberikan rekomendasi buku berdasarkan koleksi yang tersedia di bawah ini.
    3. Menjawab dengan ramah, suportif, dan menggunakan Bahasa Indonesia yang baik.
    4. Jika ditanya tentang buku yang tidak ada di daftar, katakan bahwa buku tersebut belum tersedia di perpustakaan ini.

    Daftar Buku Tersedia:
    ${booksData}
  `;
};

export async function getGeminiResponse(history: { role: string; content: string }[], newMessage: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Mulai chat dengan instruksi sistem di awal (sebagai history pertama)
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: getSystemPrompt() }],
        },
        {
          role: "model",
          parts: [{ text: "Halo! Saya mengerti. Saya siap membantu siswa EduVerseX Pro dengan koleksi buku yang tersedia." }],
        },
        // Mapping history chat sebelumnya
        ...history.map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }],
        }))
      ],
    });

    const result = await chat.sendMessage(newMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Maaf, saya sedang mengalami gangguan koneksi. Silakan coba lagi nanti.";
  }
}