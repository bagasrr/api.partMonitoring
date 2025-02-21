import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load variabel lingkungan dari file .env
dotenv.config();

// Pastikan semua variabel environment terisi
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env;

// if (!DB_NAME || !DB_USER || !DB_PASS || !DB_HOST) {
//   console.error("❌ Error: Variabel environment belum lengkap. Cek file .env!");
//   process.exit(1); // Hentikan aplikasi jika konfigurasi tidak lengkap
// }

// Buat koneksi Sequelize ke MySQL
const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT ? parseInt(DB_PORT) : 3306,
  logging: console.log, // Hapus atau ubah ke `false` jika tidak ingin log query
});

// Fungsi untuk mengetes koneksi
const testConnection = async () => {
  try {
    await db.authenticate();
    console.log("✅ Koneksi ke MySQL berhasil!");
  } catch (error) {
    console.error("❌ Koneksi ke MySQL gagal:", error.message);
  }
};

// Jalankan tes koneksi
testConnection();

export default db;
