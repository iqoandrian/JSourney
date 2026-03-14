const checkPassword = (password) => {
    const cleanPassword = password.trim();

    if (cleanPassword.length < 8) {
        return 'Password minimal 8 karakter.';
    }
    if (cleanPassword.includes("@") || cleanPassword.includes("#")) {
        return "Password kuat!";
    } else {
        return "Password harus mengandung @ atauu #";
    }
};

const sales = [
  { item: "Kopi", total: 25000, type: "Minuman" },
  { item: "Bakso", total: 15000, type: "Makanan" },
  { item: "Teh", total: 5000, type: "Minuman" },
  { item: "Sate", total: 30000, type: "Makanan" }
];

const totalSales = (sales) => {
    const filtered = sales.filter("Makanan");
    const total = filtered.reduce((acc, curr) => acc + curr, 0);

    return total;
}
const calculateFoodSales = (data) => {
  return data
    .filter(item => item.type === "Makanan") // 1. Ambil yang makanan saja
    .reduce((acc, curr) => acc + curr.total, 0); // 2. Jumlahkan totalnya
};

// Eksekusi
const total = calculateFoodSales(sales);
console.log(`Total Penjualan Makanan: Rp ${total}`); // Hasil: 45000 (15rb + 30rb)

/*
const getJakartaWeather = async () => {
    const api = "https://api.open-meteo.com/v1/forecast?latitude=-6.20&longitude=106.84&current_weather=true";
    try {
        await fetch(api);   
        return await response.json();
    } catch (error) {
        return "Waah, suhu tidak ditemukan";
    }
}

console.log(getJakartaWeather());*/

const getJakartaWeather = async () => {
    const api = "https://api.open-meteo.com/v1/forecast?latitude=-6.20&longitude=106.84&current_weather=true";

    try {
        // 1. Simpan hasil fetch ke variable 'response'
        const response = await fetch(api);

        // 2. Ubah data mentah jadi JSON
        const data = await response.json();

        // 3. Ambil spesifik data suhunya
        const temp = data.current_weather.temperature;

        return `Suhu di Jakarta saat ini adalah ${temp}°C`;
    } catch (error) {
        return "Waah, gagal ambil data cuaca nih!";
    }
};

// Karena ini fungsi async, kita pakai .then() untuk melihat hasilnya
getJakartaWeather().then(result => console.log(result));