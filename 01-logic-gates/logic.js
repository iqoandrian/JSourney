/**
 * CHALLENGE 01: Smart gatekeeper
 * Aturan :
 * 1. Username harus dibersihkan dari spasi (.trim)
 * 2. Cek status: "ADMIN", "MODERATOR", atau "MEMBER"
 * 3. Jika status kosong/undefined, berikan pesan error
 */

const inpustUser = " admin_ganteng "; //Simulasi input user
const userStatus = "ADMIN"; // Bisa diganti: MODERATOR, MEMBER atau undefined

// 1. Sanitization & Normalization
const cleanUsername = inpustUser.trim();
const normalizedStatus = userStatus?.toUpperCase();

// 2. Logical Gates (Computational Thinking)
if (!normalizedStatus) {
    console.log("Akses ditolak: Status user tidak ditemukan. Silakan login ulang.");
} else if (normalizedStatus === "ADMIN" || normalizedStatus === "MODERATOR") {
    console.log(`Selamat datang, ${cleanUsername}! Anda memiliki akses penuh.`);
} else if (normalizedStatus === "MEMBER") {
    console.log(`Halo ${cleanUsername}, Selamat menikmati event!`);
} else {
    console.log("Status tidak dikenali. akses dibatasi.");
}