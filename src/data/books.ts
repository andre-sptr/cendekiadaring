import sdTematik1 from '@/assets/covers/sd-tematik-1.jpg';
import sdMatematika4 from '@/assets/covers/sd-matematika-4.jpg';
import sdIpa5 from '@/assets/covers/sd-ipa-5.jpg';
import sdIps6 from '@/assets/covers/sd-ips-6.jpg';
import sdBindo3 from '@/assets/covers/sd-bindo-3.jpg';
import smpMatematika7 from '@/assets/covers/smp-matematika-7.jpg';
import smpIpa8 from '@/assets/covers/smp-ipa-8.jpg';
import smpIps9 from '@/assets/covers/smp-ips-9.jpg';
import smpBinggris7 from '@/assets/covers/smp-binggris-7.jpg';
import smpInformatika8 from '@/assets/covers/smp-informatika-8.jpg';
import smaFisika10 from '@/assets/covers/sma-fisika-10.jpg';
import smaKimia11 from '@/assets/covers/sma-kimia-11.jpg';
import smaBiologi12 from '@/assets/covers/sma-biologi-12.jpg';
import smaEkonomi10 from '@/assets/covers/sma-ekonomi-10.jpg';
import smaGeografi11 from '@/assets/covers/sma-geografi-11.jpg';
import smaSosiologi12 from '@/assets/covers/sma-sosiologi-12.jpg';
import smaMatematika10 from '@/assets/covers/sma-matematika-wajib-10.jpg';
import smaSejarah11 from '@/assets/covers/sma-sejarah-11.jpg';
import umumMotivasi1 from '@/assets/covers/umum-motivasi-1.jpg';
import umumUtbk1 from '@/assets/covers/umum-utbk-1.jpg';
import umumBahasaArab from '@/assets/covers/umum-bahasa-arab.jpg';
import umumEnglish from '@/assets/covers/umum-english-conversation.jpg';
import umumMotivasi2 from '@/assets/covers/umum-motivasi-2.jpg';

export interface Book {
  id: string;
  title: string;
  subject: string;
  level: 'SD' | 'SMP' | 'SMA' | 'Umum';
  grade?: string;
  description: string;
  pages: number;
  thumbnail: string;
  pdfUrl: string;
  category: string;
  preview?: string;
}

export const books: Book[] = [
  // SD Books
  {
    id: 'sd-tematik-1',
    title: 'Tematik Kelas 1 Tema 1: Diriku',
    subject: 'Tematik',
    level: 'SD',
    grade: '1',
    description: 'Buku tematik untuk siswa kelas 1 SD tema Diriku. Membahas identitas diri, keluarga, dan lingkungan sekitar.',
    pages: 180,
    thumbnail: sdTematik1,
    pdfUrl: '#',
    category: 'Tematik',
    preview: 'Tema ini membahas tentang mengenal diri sendiri, keluarga, teman, dan lingkungan. Anak akan belajar tentang anggota tubuh, kegemaran, dan cara bersosialisasi.'
  },
  {
    id: 'sd-matematika-4',
    title: 'Matematika Kelas 4 SD',
    subject: 'Matematika',
    level: 'SD',
    grade: '4',
    description: 'Buku matematika untuk siswa kelas 4 SD. Mencakup bilangan bulat, pecahan, geometri, dan pengukuran.',
    pages: 220,
    thumbnail: sdMatematika4,
    pdfUrl: '#',
    category: 'Matematika',
    preview: 'Materi meliputi operasi hitung bilangan bulat, pecahan sederhana, bangun datar, bangun ruang, dan pengukuran panjang, berat, dan waktu.'
  },
  {
    id: 'sd-ipa-5',
    title: 'Ilmu Pengetahuan Alam Kelas 5',
    subject: 'IPA',
    level: 'SD',
    grade: '5',
    description: 'Buku IPA untuk siswa kelas 5 SD. Mempelajari makhluk hidup, benda, dan energi di sekitar kita.',
    pages: 200,
    thumbnail: sdIpa5,
    pdfUrl: '#',
    category: 'IPA',
    preview: 'Pelajari tentang organ tubuh manusia, daur hidup hewan, tumbuhan, sifat bahan, gaya, energi, dan pesawat sederhana.'
  },
  {
    id: 'sd-ips-6',
    title: 'Ilmu Pengetahuan Sosial Kelas 6',
    subject: 'IPS',
    level: 'SD',
    grade: '6',
    description: 'Buku IPS untuk siswa kelas 6 SD. Membahas sejarah, geografi, ekonomi, dan budaya Indonesia.',
    pages: 190,
    thumbnail: sdIps6,
    pdfUrl: '#',
    category: 'IPS',
    preview: 'Materi mencakup kenampakan alam Indonesia, keragaman budaya, kegiatan ekonomi, perkembangan teknologi, dan peran Indonesia di Asia Tenggara.'
  },
  {
    id: 'sd-bindo-3',
    title: 'Bahasa Indonesia Kelas 3',
    subject: 'Bahasa Indonesia',
    level: 'SD',
    grade: '3',
    description: 'Buku Bahasa Indonesia untuk siswa kelas 3 SD. Mengembangkan kemampuan membaca, menulis, dan berbicara.',
    pages: 175,
    thumbnail: sdBindo3,
    pdfUrl: '#',
    category: 'Bahasa',
    preview: 'Belajar membaca cerita, menulis karangan sederhana, memahami kosakata baru, dan berlatih tata bahasa Indonesia yang baik dan benar.'
  },
  
  // SMP Books
  {
    id: 'smp-matematika-7',
    title: 'Matematika Kelas 7 SMP',
    subject: 'Matematika',
    level: 'SMP',
    grade: '7',
    description: 'Buku matematika untuk siswa kelas 7 SMP. Mencakup bilangan, aljabar, geometri, dan statistika.',
    pages: 280,
    thumbnail: smpMatematika7,
    pdfUrl: '#',
    category: 'Matematika',
    preview: 'Materi meliputi bilangan bulat dan pecahan, perbandingan, aljabar dasar, persamaan linear, segitiga, segiempat, dan penyajian data.'
  },
  {
    id: 'smp-ipa-8',
    title: 'IPA Terpadu Kelas 8',
    subject: 'IPA',
    level: 'SMP',
    grade: '8',
    description: 'Buku IPA Terpadu untuk siswa kelas 8 SMP. Mengintegrasikan fisika, kimia, dan biologi.',
    pages: 320,
    thumbnail: smpIpa8,
    pdfUrl: '#',
    category: 'IPA',
    preview: 'Pelajari gerak lurus, gaya dan hukum Newton, struktur atom, sistem pencernaan, sistem peredaran darah, dan fotosintesis.'
  },
  {
    id: 'smp-ips-9',
    title: 'IPS Kelas 9 SMP',
    subject: 'IPS',
    level: 'SMP',
    grade: '9',
    description: 'Buku IPS untuk siswa kelas 9 SMP. Membahas interaksi manusia dengan lingkungan sosial dan ekonomi.',
    pages: 290,
    thumbnail: smpIps9,
    pdfUrl: '#',
    category: 'IPS',
    preview: 'Materi mencakup perang dunia, konflik global, perdagangan internasional, globalisasi, dan tantangan ekonomi modern.'
  },
  {
    id: 'smp-binggris-7',
    title: 'Bahasa Inggris Kelas 7',
    subject: 'Bahasa Inggris',
    level: 'SMP',
    grade: '7',
    description: 'Buku Bahasa Inggris untuk siswa kelas 7 SMP. Mengembangkan kemampuan listening, speaking, reading, dan writing.',
    pages: 240,
    thumbnail: smpBinggris7,
    pdfUrl: '#',
    category: 'Bahasa',
    preview: 'Belajar grammar dasar, vocabulary, reading comprehension, dan conversation sehari-hari dalam Bahasa Inggris.'
  },
  {
    id: 'smp-informatika-8',
    title: 'Informatika Kelas 8',
    subject: 'Informatika',
    level: 'SMP',
    grade: '8',
    description: 'Buku Informatika untuk siswa kelas 8 SMP. Mengenalkan konsep dasar pemrograman dan teknologi informasi.',
    pages: 200,
    thumbnail: smpInformatika8,
    pdfUrl: '#',
    category: 'Informatika',
    preview: 'Materi mencakup algoritma, pemrograman dasar, struktur data sederhana, internet, dan keamanan digital.'
  },
  
  // SMA Books
  {
    id: 'sma-fisika-10',
    title: 'Fisika Kelas 10 SMA',
    subject: 'Fisika',
    level: 'SMA',
    grade: '10',
    description: 'Buku Fisika untuk siswa kelas 10 SMA. Mempelajari konsep dasar fisika klasik dan modern.',
    pages: 350,
    thumbnail: smaFisika10,
    pdfUrl: '#',
    category: 'IPA',
    preview: 'Pelajari besaran dan satuan, vektor, gerak lurus, gerak parabola, hukum Newton, usaha dan energi, momentum dan impuls.'
  },
  {
    id: 'sma-kimia-11',
    title: 'Kimia Kelas 11 SMA',
    subject: 'Kimia',
    level: 'SMA',
    grade: '11',
    description: 'Buku Kimia untuk siswa kelas 11 SMA. Membahas struktur atom, ikatan kimia, dan reaksi kimia.',
    pages: 340,
    thumbnail: smaKimia11,
    pdfUrl: '#',
    category: 'IPA',
    preview: 'Materi meliputi termokimia, laju reaksi, kesetimbangan kimia, asam basa, hidrolisis, larutan penyangga, dan titrasi.'
  },
  {
    id: 'sma-biologi-12',
    title: 'Biologi Kelas 12 SMA',
    subject: 'Biologi',
    level: 'SMA',
    grade: '12',
    description: 'Buku Biologi untuk siswa kelas 12 SMA. Mempelajari pertumbuhan, hereditas, evolusi, dan bioteknologi.',
    pages: 380,
    thumbnail: smaBiologi12,
    pdfUrl: '#',
    category: 'IPA',
    preview: 'Pelajari pertumbuhan dan perkembangan, metabolisme, materi genetik, pembelahan sel, hereditas, evolusi, dan bioteknologi.'
  },
  {
    id: 'sma-ekonomi-10',
    title: 'Ekonomi Kelas 10 SMA',
    subject: 'Ekonomi',
    level: 'SMA',
    grade: '10',
    description: 'Buku Ekonomi untuk siswa kelas 10 SMA. Membahas konsep dasar ekonomi dan sistem ekonomi.',
    pages: 310,
    thumbnail: smaEkonomi10,
    pdfUrl: '#',
    category: 'IPS',
    preview: 'Materi mencakup kebutuhan dan kelangkaan, sistem ekonomi, permintaan dan penawaran, pasar, kebijakan pemerintah, dan koperasi.'
  },
  {
    id: 'sma-geografi-11',
    title: 'Geografi Kelas 11 SMA',
    subject: 'Geografi',
    level: 'SMA',
    grade: '11',
    description: 'Buku Geografi untuk siswa kelas 11 SMA. Mempelajari fenomena geosfer dan persebaran sumber daya.',
    pages: 295,
    thumbnail: smaGeografi11,
    pdfUrl: '#',
    category: 'IPS',
    preview: 'Pelajari sebaran flora dan fauna, persebaran sumber daya alam, industri, pemanfaatan citra penginderaan jauh, dan pemetaan.'
  },
  {
    id: 'sma-sosiologi-12',
    title: 'Sosiologi Kelas 12 SMA',
    subject: 'Sosiologi',
    level: 'SMA',
    grade: '12',
    description: 'Buku Sosiologi untuk siswa kelas 12 SMA. Membahas perubahan sosial dan globalisasi.',
    pages: 270,
    thumbnail: smaSosiologi12,
    pdfUrl: '#',
    category: 'IPS',
    preview: 'Materi mencakup perubahan sosial, globalisasi, modernisasi, ketimpangan sosial, dan penelitian sosial sederhana.'
  },
  {
    id: 'sma-matematika-wajib-10',
    title: 'Matematika Wajib Kelas 10',
    subject: 'Matematika',
    level: 'SMA',
    grade: '10',
    description: 'Buku Matematika Wajib untuk siswa kelas 10 SMA. Mencakup fungsi, trigonometri, dan statistika.',
    pages: 320,
    thumbnail: smaMatematika10,
    pdfUrl: '#',
    category: 'Matematika',
    preview: 'Materi meliputi persamaan dan pertidaksamaan, sistem persamaan linear, fungsi kuadrat, trigonometri, dan statistika dasar.'
  },
  {
    id: 'sma-sejarah-11',
    title: 'Sejarah Indonesia Kelas 11',
    subject: 'Sejarah',
    level: 'SMA',
    grade: '11',
    description: 'Buku Sejarah Indonesia untuk siswa kelas 11 SMA. Membahas perjuangan kemerdekaan Indonesia.',
    pages: 260,
    thumbnail: smaSejarah11,
    pdfUrl: '#',
    category: 'Sejarah',
    preview: 'Pelajari perkembangan kolonialisme, pergerakan nasional, kebangkitan nasional, Sumpah Pemuda, hingga proklamasi kemerdekaan.'
  },
  
  // Umum Books
  {
    id: 'umum-motivasi-1',
    title: 'Atomic Habits - Perubahan Kecil Hasil Luar Biasa',
    subject: 'Motivasi',
    level: 'Umum',
    description: 'Buku motivasi tentang membangun kebiasaan baik dan menghilangkan kebiasaan buruk melalui perubahan kecil yang konsisten.',
    pages: 320,
    thumbnail: umumMotivasi1,
    pdfUrl: '#',
    category: 'Motivasi',
    preview: 'Pelajari bagaimana kebiasaan kecil yang dilakukan secara konsisten dapat menghasilkan perubahan luar biasa dalam hidup Anda.'
  },
  {
    id: 'umum-utbk-1',
    title: 'Master UTBK 2025',
    subject: 'UTBK',
    level: 'Umum',
    description: 'Panduan lengkap persiapan UTBK 2025 dengan strategi, tips, dan latihan soal.',
    pages: 450,
    thumbnail: umumUtbk1,
    pdfUrl: '#',
    category: 'Ujian',
    preview: 'Persiapkan diri menghadapi UTBK dengan latihan soal, pembahasan lengkap, strategi mengerjakan, dan tips sukses masuk PTN favorit.'
  },
  {
    id: 'umum-bahasa-arab',
    title: 'Bahasa Arab Dasar untuk Pemula',
    subject: 'Bahasa Arab',
    level: 'Umum',
    description: 'Buku pembelajaran Bahasa Arab tingkat dasar untuk pemula dengan metode praktis.',
    pages: 200,
    thumbnail: umumBahasaArab,
    pdfUrl: '#',
    category: 'Bahasa',
    preview: 'Belajar huruf hijaiyah, kosakata dasar, tata bahasa Arab sederhana, dan percakapan sehari-hari dalam Bahasa Arab.'
  },
  {
    id: 'umum-english-conversation',
    title: 'English Conversation Practice',
    subject: 'Bahasa Inggris',
    level: 'Umum',
    description: 'Latihan percakapan Bahasa Inggris sehari-hari untuk meningkatkan kemampuan speaking.',
    pages: 180,
    thumbnail: umumEnglish,
    pdfUrl: '#',
    category: 'Bahasa',
    preview: 'Praktikkan percakapan Bahasa Inggris dalam berbagai situasi: di restoran, bandara, hotel, kantor, dan kehidupan sehari-hari.'
  },
  {
    id: 'umum-motivasi-2',
    title: 'Mindset: The New Psychology of Success',
    subject: 'Motivasi',
    level: 'Umum',
    description: 'Buku tentang pola pikir untuk meraih kesuksesan. Membandingkan fixed mindset vs growth mindset.',
    pages: 280,
    thumbnail: umumMotivasi2,
    pdfUrl: '#',
    category: 'Motivasi',
    preview: 'Pahami perbedaan antara fixed mindset dan growth mindset, dan bagaimana mengembangkan pola pikir yang tepat untuk mencapai kesuksesan.'
  },
];

export const categories = [
  'Semua',
  'Tematik',
  'Matematika',
  'IPA',
  'IPS',
  'Bahasa',
  'Informatika',
  'Sejarah',
  'Motivasi',
  'Ujian',
];

export const levels = ['Semua', 'SD', 'SMP', 'SMA', 'Umum'];
