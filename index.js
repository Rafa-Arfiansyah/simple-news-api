const axios = require('axios');
const prompts = require('prompts'); // Ganti inquirer dengan prompts

// Fungsi untuk mendapatkan berita terbaru
async function fetchLatestNews() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=api-key-anda');
        
        // Cek status respons
        console.log('Status Respons:', response.status);
        
        if (response.data.articles.length === 0) {
            console.log('Tidak ada berita yang ditemukan.'); // Jika tidak ada artikel
            return []; // Mengembalikan array kosong
        }
        
        const articles = response.data.articles;
        return articles;
    } catch (error) {
        console.error('Error fetching latest news:', error);
        return []; // Mengembalikan array kosong jika ada kesalahan
    }
}


// Fungsi untuk mencari berita berdasarkan kata kunci
async function searchNews(query) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=api-key-anda`);
        const articles = response.data.articles;
        return articles;
    } catch (error) {
        console.error('Error searching news:', error);
    }
}

// Fungsi untuk menampilkan berita
function displayNews(articles) {
    if (articles.length === 0) {
        console.log('Tidak ada berita yang ditemukan.');
        return;
    }
    articles.forEach((article, index) => {
        console.log(`${index + 1}. ${article.title}`);
        console.log(`   Sumber: ${article.source.name}`);
        console.log(`   URL: ${article.url}`);
        console.log();
    });
}

// Fungsi untuk menampilkan menu
async function showMenu() {
    const response = await prompts({
        type: 'select',
        name: 'action',
        message: 'Apa yang ingin Anda lakukan?',
        choices: [
            { title: 'Dapatkan berita terbaru', value: 'latest' },
            { title: 'Cari berita', value: 'search' },
            { title: 'Keluar', value: 'exit' },
        ],
    });

    return response.action; // Kembalikan aksi yang dipilih
}

// Fungsi utama untuk menjalankan aplikasi
async function main() {
    while (true) {
        const action = await showMenu(); // Tampilkan menu

        if (action === 'latest') {
            const latestNews = await fetchLatestNews();
            displayNews(latestNews);
        } else if (action === 'search') {
            const response = await prompts({
                type: 'text',
                name: 'query',
                message: 'Masukkan kata kunci untuk mencari berita:',
            });
            const searchResults = await searchNews(response.query);
            displayNews(searchResults);
        } else if (action === 'exit') {
            console.log('Keluar dari aplikasi.');
            break; // Keluar dari loop
        }
    }
}

main(); // Jalankan fungsi utama
