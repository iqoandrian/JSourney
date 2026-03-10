/**
 * CHALLENGE 03: Inventory Management
 * Mengelola data masif menggunakan Method Chaining (Filter & Map).
 */

const products = [
  { id: 1, name: "Macbook Pro", price: 25000000, category: "Laptop", stock: 3 },
  { id: 2, name: "Mechanical Keyboard", price: 1500000, category: "Aksesoris", stock: 0 },
  { id: 3, name: "Monitor 27 Inch", price: 4500000, category: "Monitor", stock: 10 },
  { id: 4, name: "Gaming Mouse", price: 800000, category: "Aksesoris", stock: 5 },
];

// 1. Task: Ambil NAMA produk yang harganya di bawah 5 Juta DAN ready stock
const affordableReadyNames = products
  .filter(item => item.price < 5000000 && item.stock > 0)
  .map(item => item.name);

// 2. Task: Hitung total nilai aset (Harga * Stok) untuk semua barang
// Tips: Kita gunakan .reduce() - ini ilmu tambahan buat kamu!
const totalValue = products.reduce((acc, item) => acc + (item.price * item.stock), 0);

console.log("Produk Terjangkau & Ready:", affordableReadyNames);
console.log("Total Nilai Gudang: Rp", totalValue.toLocaleString('id-ID'));