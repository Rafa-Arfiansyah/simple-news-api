# News API Indonesia

![Logo](https://example.com/logo.png) <!-- Ganti dengan URL logo proyek kamu -->

## Deskripsi

**News API Indonesia** adalah aplikasi yang memudahkan pengguna untuk mendapatkan berita terbaru dari berbagai sumber berita terkemuka di Indonesia menggunakan Axios untuk melakukan permintaan HTTP. Aplikasi ini menggunakan `prompts` untuk interaksi pengguna di terminal, memberikan antarmuka yang intuitif dan mudah digunakan.

## Fitur Utama

- **Dapatkan Berita Terbaru**: Mengambil berita terbaru dari sumber berita Indonesia.
- **Kategori Berita**: Mengizinkan pengguna untuk memilih kategori berita yang diinginkan.
- **Penggunaan yang Mudah**: Interaksi melalui terminal menggunakan `prompts` untuk navigasi yang sederhana.

## Teknologi yang Digunakan

- [Node.js](https://nodejs.org/) - Untuk pengembangan backend.
- [Axios](https://axios-http.com/) - Untuk melakukan permintaan HTTP ke API berita.
- [Prompts](https://github.com/terkelg/prompts) - Untuk interaksi pengguna melalui terminal.

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan proyek ini di lokal:

1. **Clone Repository**
   ```bash
   git clone https://github.com/Rafa-Arfiansyah/simple-news-api.git
   cd simple-news-api
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi**
   ```bash
   node index.js
   ```

## Cara Penggunaan

1. Setelah aplikasi berjalan, Anda akan melihat menu interaktif di terminal.
2. Pilih opsi yang diinginkan dengan menggunakan tombol panah dan tekan Enter.
3. Aplikasi akan menampilkan berita terbaru berdasarkan pilihan yang Anda buat.

### Contoh Penggunaan

```bash
node index.js
```

- **Output**: Menu interaktif untuk memilih opsi berita.

## Contoh Kode

Berikut adalah contoh penggunaan Axios untuk mendapatkan berita terbaru:

```javascript
const axios = require('axios');

async function getLatestNews() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=YOUR_API_KEY');
        const news = response.data.articles;
        console.log(news);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}
```

## Kontribusi

Kami sangat menghargai kontribusi dari komunitas. Jika Anda ingin berkontribusi, silakan lakukan langkah-langkah berikut:

1. Fork repository ini.
2. Buat cabang baru (`git checkout -b feature-nama-fitur`).
3. Lakukan perubahan dan commit (`git commit -m 'Menambahkan fitur baru'`).
4. Push ke cabang (`git push origin feature-nama-fitur`).
5. Buat Pull Request.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Kontak

Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi saya di:

- Email: [rap.astore@gmail.com](mailto:rap.astore73@gmail.com)
- GitHub: [@Rafa-Arfiansyah](https://github.com/Rafa-Arfiansyah)

---

Terima kasih telah menggunakan **News API Indonesia**! Semoga aplikasi ini bermanfaat untuk Anda.
