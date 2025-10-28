# Proyek Dominoes

Sebuah aplikasi halaman tunggal (Single Page Application) sederhana untuk menampilkan dan memanipulasi satu set kartu domino. Proyek ini dibuat menggunakan **React** dan **Vite**.

Proyek ini ditujukan untuk take home test JCWDAH-022 2025

## ✨ Fitur

Aplikasi ini memiliki beberapa fitur fungsional:

- **Tampilan Dinamis:** Menampilkan semua kartu domino dari data sumber.
- **Hitung Ganda:** Secara otomatis menghitung dan menampilkan jumlah kartu "ganda" (misal, `[1,1]`, `[3,3]`).
- **Sort (ASC):** Mengurutkan kartu dari total terkecil ke terbesar. Jika total sama, diurutkan berdasarkan angka pertama yang terkecil.
- **Sort (DESC):** Mengurutkan kartu dari total terbesar ke terkecil. Jika total sama, diurutkan berdasarkan angka pertama yang terbesar.
- **Flip:** Membalik posisi angka pada semua kartu (misal, `[1,2]` menjadi `[2,1]`).
- **Remove Dup:** Menghapus semua kartu yang dianggap duplikat (termasuk yang terbalik, misal `[1,2]` dan `[2,1]`). Hanya kartu yang benar-benar unik yang tersisa.
- **Remove by Total:** Menghapus semua kartu yang total jumlahnya sama dengan angka yang diinput oleh pengguna.
- **Validasi Input:** Memberikan pesan error jika input untuk "Remove" tidak valid (bukan angka).
- **Reset:** Mengembalikan daftar kartu ke kondisi data awal.

## 🚀 Cara Menjalankan Proyek

Untuk menjalankan proyek ini di mesin lokal Anda, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**

    ```bash
    git clone [URL-repositori-Anda-di-sini]
    cd [nama-folder-proyek]
    ```

2.  **Install dependensi:**
    (Pastikan Anda memiliki Node.js terinstal)

    ```bash
    npm install
    ```

3.  **Jalankan server pengembangan:**

    ```bash
    npm run dev
    ```

4.  **Buka di browser:**
    Buka `http://localhost:5173` (atau port lain yang muncul di terminal Anda) untuk melihat aplikasi.
