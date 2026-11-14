KONSTITA — PAKET OPTIMASI MOBILE

Isi paket:
1. mobile-optimization.css
   CSS tambahan untuk meningkatkan tampilan mobile pada header/menu, hero, shortcut beranda,
   kartu dokumen, formulir aspirasi, tabel admin, pratinjau Google Docs, dan footer.

2. mobile-nav-enhancement.js
   Penyempurnaan kecil navigasi: menu dapat ditutup dengan tombol Escape atau mengetuk area di luar header.

CARA MEMASANG
A. Buka repository:
   https://github.com/denisrohmansyah-cloud/KONSTITA

B. Buka index.html, pilih Edit.

C. Cari tag </style> pertama. Buka mobile-optimization.css, salin seluruh isinya,
   lalu tempel tepat SEBELUM </style>.

D. Cari fungsi showPage(id) dan baris:
   document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
   Salin isi mobile-nav-enhancement.js ke bagian setelah baris tersebut.

E. Simpan / Commit changes ke branch main.

CATATAN
- Jangan hapus CSS yang sudah ada; paket ini ditambahkan di bagian paling akhir agar menjadi override.
- Jangan mengganti konten atau aset gambar.
- Setelah GitHub Pages selesai deploy, buka situs dari HP dan lakukan refresh.
- File ini merupakan patch tambahan, bukan pengganti index.html lengkap.
