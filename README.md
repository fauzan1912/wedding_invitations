# Undangan Pernikahan Digital

Website undangan pernikahan yang elegan dan responsif dengan fitur-fitur modern.

## Fitur Utama

- 🎭 Halaman pembuka yang menarik dengan animasi
- ⏰ Countdown timer real-time menuju hari pernikahan
- 📅 Fitur tambah ke kalender Google
- 🎨 Animasi transisi yang smooth dan menarik
- 📱 Desain responsif untuk semua perangkat
- 💌 Form RSVP untuk konfirmasi kehadiran
- 🎁 Amplop digital dengan informasi rekening
- 📸 Galeri foto pasangan
- 📞 Informasi kontak keluarga

## Teknologi yang Digunakan

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Lucide React** - Icons

## Cara Menjalankan Proyek

### 1. Clone atau Download Proyek

\`\`\`bash
# Jika menggunakan Git
git clone <repository-url>
cd wedding-invitation

# Atau extract file ZIP ke folder wedding-invitation
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# atau
yarn install
# atau
pnpm install
\`\`\`

### 3. Jalankan Development Server

\`\`\`bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
\`\`\`

### 4. Buka Browser

Buka [http://localhost:3000](http://localhost:3000) untuk melihat website.

## Kustomisasi

### Mengubah Data Pasangan

Edit file `app/page.tsx` dan ubah:
- Nama pasangan
- Tanggal pernikahan
- Lokasi acara
- Informasi kontak
- Nomor rekening

### Mengubah Warna Tema

Edit file `tailwind.config.js` atau `app/globals.css` untuk mengubah skema warna.

### Menambah Foto

Ganti placeholder images dengan foto asli di folder `public/images/`.

## Build untuk Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Deploy

Website ini dapat di-deploy ke:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Hosting lainnya yang mendukung Next.js

## Struktur Folder

\`\`\`
wedding-invitation/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
├── lib/
│   └── utils.ts
├── public/
├── package.json
├── tailwind.config.js
└── README.md
\`\`\`

## Lisensi

Proyek ini dibuat untuk keperluan personal. Silakan dimodifikasi sesuai kebutuhan.

---

Dibuat dengan ❤️ untuk Andi & Sari
