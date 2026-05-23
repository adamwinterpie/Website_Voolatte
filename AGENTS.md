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

## Aturan Update Project

- Setiap kali ada perubahan pada project, update `AGENTS.md` agar catatan project tetap sesuai kondisi terbaru.
- Setelah perubahan selesai dan sudah dicek, buat commit Git dengan pesan yang jelas.
- Setelah commit berhasil, push perubahan ke GitHub remote `origin/main`.
- Jangan tinggalkan perubahan penting hanya di lokal kecuali user secara eksplisit meminta untuk tidak commit atau tidak push.

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
|-- videos
|   `-- .gitkeep
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
- Data squishy bisa memakai properti `media` untuk beberapa gambar/video, misalnya `{ type: "image", src: "images/file.png" }` atau `{ type: "video", src: "videos/file.mp4" }`.
- File gambar baru diletakkan di folder `images`; file video baru diletakkan di folder `videos`.
- Properti `image` lama masih didukung sebagai fallback jika `media` belum diisi.
- Jika `media` belum diisi, carousel sementara memakai gambar starter dari `images/squishy-a.png`, `images/squishy-b.png`, dan `images/squishy-c.png`.
- Jika sebuah squishy memiliki lebih dari satu media, tombol slide sebelumnya/berikutnya hanya tampil pada detail inline setelah kartu dibuka.
- Setiap kartu koleksi bisa diklik.
- Setelah kartu diklik, kartu tersebut berubah menjadi detail inline di posisi kartu koleksi yang dipilih.
- Detail inline bisa ditutup dengan mengklik kembali kartu detail tersebut.
- Deskripsi detail squishy tersedia dalam Bahasa Indonesia dan English.
- Teks "Detail Squishy" sudah dihapus dari kartu detail.
- Tombol "Kembali ke Koleksi" / "Back to Collection" sudah tidak ditampilkan pada detail inline.
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
- Jika menambah gambar baru, letakkan di folder `images` dan hubungkan lewat data `media` di `script.js`.
- Jika menambah video baru, letakkan di folder `videos` dan hubungkan lewat data `media` di `script.js`.

## File Penting

- `index.html`: struktur halaman, hero, koleksi, detail squishy, footer, link WhatsApp, dan tombol mode bahasa.
- `style.css`: background, overlay, glassmorphism, responsif mobile, kartu koleksi, detail squishy, tombol mode bahasa, footer, dan kontak WhatsApp.
- `script.js`: object terjemahan `translations`, data squishy bilingual, data `media`, pilihan bahasa aktif, render kartu koleksi, carousel gambar/video, search, klik kartu untuk membuka/menutup detail inline.

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
- Teks statis, placeholder search, empty state, aria label kartu, alt gambar, dan deskripsi squishy sudah mengikuti bahasa aktif.
- Pilihan bahasa disimpan dengan key `voolatteLanguage` di `localStorage`.
- Detail squishy sekarang tampil inline menggantikan kartu koleksi yang diklik, bukan muncul di bagian bawah website.
- Tombol kembali pada detail inline dihapus; klik kartu detail untuk menutup detail dan kembali ke kartu koleksi.
- Kartu koleksi dan detail inline sekarang mendukung media gambar/video melalui properti `media` di data squishy.
- Tombol slide carousel hanya tampil pada detail inline, bukan pada daftar kartu koleksi.
- Carousel sementara otomatis memakai gambar Squishy A, B, dan C agar semua kartu bisa langsung digeser.
