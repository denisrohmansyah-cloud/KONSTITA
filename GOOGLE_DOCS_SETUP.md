# Panduan Google Docs untuk Portal Amandemen PPOM 2026

## Dokumen yang disarankan

Siapkan dokumen Google Docs terpisah:

1. **PPOM 2020** — salinan dokumen lama yang menjadi pembanding.
2. **Draft PPOM 2026** — naskah PPOM yang sedang diamandemen.
3. **Landasan Amandemen per Pasal** — alasan, urgensi, dasar pertimbangan, serta perubahan yang diusulkan untuk setiap pasal/ayat.

Jika ada catatan internal, komentar strategis, atau informasi yang belum boleh dilihat publik, simpan di dokumen kerja internal terpisah. Jangan publikasikan dokumen internal.

## Memberikan akses edit kepada staf

1. Buka dokumen sumber di Google Docs.
2. Klik **Bagikan**.
3. Tambahkan alamat Gmail staf yang memang diberi wewenang.
4. Berikan peran **Editor** hanya kepada staf yang perlu mengubah dokumen tersebut.
5. Pertahankan akses umum sebagai **Dibatasi** bila tidak diperlukan untuk publik.

Akses edit staf diberikan di Google Drive/Docs, bukan melalui halaman publik website.

## Menampilkan dokumen di website

Untuk tiap dokumen publik:

1. Buka dokumen di Google Docs.
2. Pilih **File → Bagikan → Publikasikan ke web** (label menu bisa sedikit berbeda sesuai bahasa akun).
3. Pilih tab **Sematkan/Embed** bila tersedia, lalu klik **Publikasikan**.
4. Salin URL dari kode embed yang diberikan Google. URL publikasi Google Docs umumnya berbentuk `https://docs.google.com/document/d/e/PUBLISHED_ID/pub`.
5. Pastikan opsi **Publikasikan ulang secara otomatis saat ada perubahan** aktif pada **Konten dan setelan yang dipublikasikan**.
6. Tempel URL publikasi tersebut pada pengaturan dokumen di Dashboard Admin prototype, lalu klik **Simpan tautan (demo)**.

Jangan menempelkan URL edit biasa yang berakhir dengan `/edit`. URL dokumen edit bukan URL publikasi/embed.

## Catatan privasi penting

- Dokumen yang dipublikasikan dapat dibaca oleh audiens sesuai pilihan publikasi dan setelan akun organisasi.
- Publikasikan hanya naskah yang memang boleh dibaca mahasiswa/publik.
- Jangan masukkan data pribadi, komentar internal, atau strategi pembahasan yang belum boleh diumumkan.
- Staf tetap mengedit dokumen sumber dengan akun masing-masing; pengunjung website hanya membaca versi publikasi.

## Batasan prototype dan langkah produksi

Pada prototype saat ini, URL dokumen disimpan di `localStorage`. Artinya konfigurasi hanya berlaku di browser/perangkat yang memasukkannya. Aspirasi juga tersimpan secara lokal dan tidak dibagikan lintas perangkat.

Agar website sungguhan berfungsi untuk semua pengunjung:
- simpan URL dokumen publikasi pada konfigurasi server/database, bukan localStorage;
- buat backend untuk menerima aspirasi;
- simpan aspirasi dalam database dan terapkan moderasi admin;
- gunakan autentikasi Google/OAuth atau mekanisme aman untuk akun staf;
- simpan role dan izin staf pada backend;
- buat audit log perubahan konten dan moderasi.

Referensi resmi Google:
https://support.google.com/docs/answer/183965
