# Pembaruan logo footer KONSTITA

Isi paket:
- `assets/logo-fl2mi.webp` — logo FL2MI dengan latar transparan, resolusi sumber 1600 × 888.
- `assets/logo-fl2mi-transparent.png` — salinan PNG transparan berkualitas tinggi.
- `footer-logo-update.css` — CSS untuk mengatur ukuran dan tata letak.
- `footer-logo-snippet.html` — blok HTML footer yang diperbarui.

## Pemasangan

1. Salin `assets/logo-fl2mi.webp` ke folder `assets` pada repository KONSTITA.
2. Di `index.html`, cari elemen `<div class="footer-logos" ...>` dan ganti isinya dengan blok di `footer-logo-snippet.html`.
3. Salin isi `footer-logo-update.css` ke bagian paling akhir tag `<style>` pada `index.html`, setelah aturan CSS footer yang sudah ada.
4. Commit perubahan ke branch `main`, lalu tunggu GitHub Pages memperbarui halaman.

## Ukuran yang disetel
- Logo identitas persegi: 54 × 54 px.
- Logo Poltekkes Kemenkes yang horizontal: lebar 86 px, tinggi kotak 54 px (di layar sangat kecil lebar 78 px).
- Logo FL2MI: lebar 90 px, tinggi kotak 54 px (di layar sangat kecil lebar 84 px).

Logo memakai `object-fit: contain`; jadi proporsi asli dijaga. Tidak ada kartu, warna latar, atau label teks di belakang/bawah logo.
