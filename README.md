# Portfolio Afdal Kurniawan

Website portfolio pribadi berbasis React dan Vite. Website ini menampilkan profil, skill, pengalaman, pendidikan, proyek, sertifikat, dan informasi kontak.

## Teknologi

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React

## Menjalankan Project

Pastikan Node.js sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Build production dan pemeriksaan kode:

```bash
npm run build
npm run lint
```

Preview hasil build production:

```bash
npm run preview
```

## Struktur Utama

```text
src/
	components/     Komponen halaman seperti Hero, About, Project, Contact, dan Footer
	data/           Data proyek dan sertifikat
	pages/          Halaman detail proyek
	assets/         Gambar dan icon yang digunakan aplikasi
	App.jsx         Routing dan susunan halaman utama
	index.css       Import Tailwind CSS dan style global
```

## Optimasi Performa

- Animasi background blur dikurangi menjadi tiga elemen dengan durasi lebih panjang.
- Jumlah icon floating pada hero dikurangi agar animasi lebih ringan.
- Marquee skill dibuat lebih lambat dan tidak menggandakan seluruh daftar icon.
- Gambar non-kritis menggunakan `loading="lazy"` dan `decoding="async"`.
- File asset dan komponen yang tidak digunakan sudah dihapus.
- Gambar project tetap menggunakan format WebP untuk ukuran file yang lebih kecil.

Asset terbesar saat ini adalah gambar project `project-danau.webp`. Asset tersebut masih digunakan pada kartu project dan halaman detail, sehingga tidak dihapus.

## Validasi

Sebelum perubahan dianggap siap, jalankan:

```bash
npm run build
npm run lint
```

Kedua perintah tersebut harus selesai tanpa error.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
