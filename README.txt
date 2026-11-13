PORTAL AMANDEMEN PPOM 2026 — PROTOTYPE

Tujuan
Portal informasi dan partisipasi publik untuk proses Amandemen PPOM 2026.

Struktur konten
- Aspirasi Umum: tanpa login; pengirim boleh anonim atau menampilkan nama. Aspirasi baru masuk antrean moderasi dan hanya yang disetujui admin yang ditampilkan kepada publik.
- PPOM 2020: dokumen lama sebelum amandemen.
- PPOM 2026: draft yang sedang diamandemen dan direncanakan dikelola melalui Google Docs.
- Landasan Amandemen per Pasal: alasan dan dasar perubahan tiap pasal/ayat, dikelola melalui Google Docs.

Pengujian prototype
1. Buka index.html pada browser.
2. Kirim aspirasi pada menu Aspirasi Umum.
3. Masuk menu Admin DPM menggunakan kode demo DPM2026.
4. Setujui aspirasi agar tampil pada daftar publik.
5. Masukkan URL hasil Google Docs > File > Share > Publish to web pada pengaturan dokumen untuk mencoba pratinjau embed.

Batasan keamanan dan sinkronisasi
- Aspirasi dan konfigurasi URL Google Docs masih disimpan di localStorage browser ini saja. Tidak tersinkron antar-pengunjung/perangkat.
- Login Admin DPM dengan kode DPM2026 hanyalah simulasi frontend; kode ada di HTML dan tidak aman.
- Belum ada database, backend, autentikasi Google, otorisasi per-staf, atau audit log.
- Integrasi Google Docs yang sebenarnya memerlukan URL publikasi yang dikonfigurasi secara terpusat (misalnya lewat backend/config server). Setelah Google Docs dipublikasikan dengan opsi otomatis republish, perubahan pada dokumen sumber dapat tampil setelah halaman publik diperbarui.
- Jangan masukkan informasi internal/rahasia ke dokumen yang dipublikasikan untuk web.

Panduan penyiapan Google Docs: lihat GOOGLE_DOCS_SETUP.md.
