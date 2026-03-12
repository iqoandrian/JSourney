/**
 * CHALLENGE 04: Async World (The final boss)
 * Mengambil data dari API publik dan mengolahnya dengan semua ilmu sebelumnya.
 */

// KKita pakai API dummy (Placeholder) untuk simulasi
const fetchUser = async () => {
    console.log("Menghubungkan ke server...");

    try {
        // 1. Request data ke API(Await: Tunggu sampai kelar)
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // Cek response sukses (Status 200)
        if (!response.ok) throw new Error("Gagal mengambil data!");

        const data = await response.json();

        // Data Wrangling (Gabungan ilmu folder 01-03)
        // Kita filter user yang namanya mengandung huruf 'a' dan ambil emmailnya saja
        const cleanEmails = data
            .filter(user => user.name.toLowerCase().includes('a'))
            .map(user => user.email.toLowerCase());
        
        console.log("Data berhasil diproses:");
        console.table(cleanEmails);
    } catch (error) {
        // 3. Error handling (Ilmu folder 01: Peringatan koneksi)
        console.error("Oops, sepertinya koneksi internetmu bermasalah:",error.message);
    } finally {
        console.log("Proses selesai");
    }
};

// Eksekusi mesinnya
fetchUser();