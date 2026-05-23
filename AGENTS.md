# Voolatte Project Notes

Gunakan catatan ini sebagai konteks utama saat melanjutkan project Voolatte.

## Ringkasan Project

Voolatte adalah website dummy untuk menampilkan koleksi squishy pribadi.
Website dibuat dengan tampilan dreamy, creamy, soft pastel, elegant, cozy, dan responsif untuk HP.
Nuansa visual yang dipakai adalah strawberry milk aesthetic dan modern cute gallery.

## Teknologi

- HTML
- CSS
- JavaScript vanilla
- Tidak memakai framework
- Tidak membutuhkan server lokal untuk dibuka

## Struktur File

```text
Voolatte
|-- AGENTS.md
|-- index.html
|-- style.css
|-- script.js
|-- images
|   |-- background.png
|   |-- squishy-a.png
|   |-- squishy-b.png
|   `-- squishy-c.png
`-- music
    `-- background-music.mp3
```

Catatan: file `music/background-music.mp3` ada, tetapi background music saat ini tidak dipakai di website.

## Cara Membuka Website

Buka file berikut di browser:

```text
C:\Users\OMEN\Voolatte\index.html
```

Jika perubahan CSS atau gambar belum terlihat, lakukan hard refresh di browser dengan `Ctrl + F5`.

## Fitur Saat Ini

- Navbar berisi logo teks "Voolatte" dan pilihan mode bahasa "ID" / "EN".
- Mode bahasa tersimpan di `localStorage`, sehingga pilihan terakhir tetap dipakai saat website dibuka lagi.
- Atribut `lang`, title halaman, aria label, alt gambar, dan teks tampilan ikut berubah sesuai bahasa aktif.
- Hero section dengan judul "Voolatte".
- Deskripsi Voolatte tersedia dalam Bahasa Indonesia dan English.
- Tombol hero "Lihat Koleksi" / "View Collection" mengarah ke bagian koleksi.
- Sisi kanan hero menampilkan 3 gambar karakter squishy dari `images/squishy-a.png`, `images/squishy-b.png`, dan `images/squishy-c.png`.
- Bagian koleksi memiliki judul "Koleksi Voolatte" / "Voolatte Collection".
- Bagian heading koleksi memiliki fitur search di sebelah kanan pada desktop.
- Placeholder search adalah "Cari squishy..." / "Search squishy...".
- Search memfilter kartu berdasarkan nama squishy.
- Jika hasil search kosong, teks yang muncul adalah "Squishy tidak ditemukan." / "Squishy not found.".
- Galeri berisi kartu squishy dari Squishy A sampai Squishy Z.
- Gambar squishy berada di folder `images`.
- Squishy A, B, dan C memakai gambar asli dari folder `images`.
- Squishy D sampai Z belum memiliki gambar dan memakai placeholder huruf dari data `icon` di `script.js`.
- Setiap kartu koleksi bisa diklik.
- Setelah kartu diklik, muncul bagian detail berisi gambar squishy, nama, dan deskripsi singkat.
- Deskripsi detail squishy tersedia dalam Bahasa Indonesia dan English.
- Teks "Detail Squishy" sudah dihapus dari kartu detail.
- Tombol detail bertuliskan "Kembali ke Koleksi" / "Back to Collection" dan posisinya berada di bawah kartu detail.
- Footer hanya menampilkan "Voolatte" dan kontak WhatsApp.
- Kontak footer menampilkan "083817966224 (Adam)" dan link ke `https://wa.me/6283817966224`.

## Catatan Desain

- Background utama website memakai `images/background.png`.
- Background menggunakan `background-size: cover` dan `background-position: center`.
- Ada overlay putih/pink transparan agar teks dan kartu tetap mudah dibaca.
- Ada efek glow dan bubble transparan ringan lewat pseudo-element CSS.
- Navbar, hero content, gallery section, detail card, dan footer memakai glassmorphism/blur ringan.
- Tombol mode bahasa memakai gaya pastel/glassmorphism, dengan state aktif beraksen pink-peach.
- Search koleksi memakai style pastel/glassmorphism dan responsif; di layar kecil search turun ke bawah judul.
- Palet warna utama: cream, pastel pink, peach, dan aksen pink.
- Pertahankan gaya dreamy, creamy, soft pastel, elegant, cozy squishy aesthetic.
- Jangan membuat background terlalu ramai; fokus utama tetap koleksi squishy.
- Pertahankan performa ringan, gunakan CSS sederhana, dan jangan menambahkan framework kecuali user meminta.
- Gunakan komentar singkat hanya pada bagian CSS/JS penting agar mudah dipahami pemula.
- Jika menambah gambar baru, letakkan di folder `images` dan hubungkan lewat data di `script.js`.

## File Penting

- `index.html`: struktur halaman, hero, koleksi, detail squishy, footer, link WhatsApp, dan tombol mode bahasa.
- `style.css`: background, overlay, glassmorphism, responsif mobile, kartu koleksi, detail squishy, tombol mode bahasa, footer, dan kontak WhatsApp.
- `script.js`: object terjemahan `translations`, data squishy bilingual, pilihan bahasa aktif, render kartu koleksi, search, klik kartu untuk membuka detail, dan tombol kembali ke koleksi.

## Catatan Perubahan Terakhir

- Teks heading hero terakhir adalah "Voolatte".
- Teks navbar "Galeri Squishy" sudah dihapus.
- Label kecil "Koleksi" di atas judul galeri sudah dihapus.
- Judul bagian galeri adalah "Koleksi Voolatte".
- Fitur search ditambahkan di heading galeri sebelah kanan dengan placeholder "Cari squishy...".
- Teks empty state search adalah "Squishy tidak ditemukan.".
- Typo "Squisy A" sudah diperbaiki menjadi "Squishy A".
- Hero visual yang sebelumnya berupa 3 bentuk bola dekoratif sudah diganti menjadi gambar karakter squishy.
- Kartu koleksi sudah ditambah dari Squishy A sampai Squishy Z.
- Squishy D sampai Z masih memakai placeholder huruf karena belum ada file gambar baru.
- Footer sudah disederhanakan menjadi "Voolatte" plus kontak WhatsApp Adam.
- Background music sempat dicoba, tetapi dibatalkan dan kode audio sudah dihapus dari `index.html` dan `script.js`.
- Mode bahasa Indonesia dan English sudah ditambahkan melalui tombol ID/EN di navbar.
- Teks statis, placeholder search, empty state, tombol detail, aria label kartu, alt gambar, dan deskripsi squishy sudah mengikuti bahasa aktif.
- Pilihan bahasa disimpan dengan key `voolatteLanguage` di `localStorage`.
