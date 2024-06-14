import Layout from "@/components/layouts/Layout";
import React from "react";
import styles from "./style/index.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.homeContainer}>
        <section className={styles.introSection}>
          <h1 className={styles.mainTitle}>Selamat Datang di Smoothies Mapan</h1>
          <p className={styles.description}>
          Di Smoothies Mapan, kami percaya bahwa gaya hidup sehat dimulai dari apa yang Anda minum. Smoothie kami dibuat dari bahan-bahan segar, kaya nutrisi, dan penuh dengan rasa. Baik Anda mencari tambahan energi setelah olahraga, camilan bergizi, atau sajian lezat lainnya, kami memiliki smoothie yang sempurna untuk Anda.
          </p>
        </section>

        <section className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Mengapa Memilih Smoothie Kami?</h2>
          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <h3>Bahan Yang Segar</h3>
              <p>Kami hanya menggunakan buah-buahan, sayuran, dan superfood terbaik dalam smoothie kami. Tanpa pengawet, tanpa perasa buatan, hanya kesegaran alami.</p>
            </li>
            <li className={styles.benefitItem}>
              <h3>Kaya Nutrisi</h3>
              <p>Setiap smoothie dirancang secara hati-hati untuk memberikan vitamin, mineral, dan antioksidan penting. Nikmati minuman lezat yang juga memberi energi pada tubuh Anda.</p>
            </li>
          </ul>
        </section>

        <section className={styles.productsSection}>
          <h2 className={styles.sectionTitle}>Produk Terlaris Kami</h2>
          <ul className={styles.productList}>
            <li className={styles.productItem}>
              <h3>Tropical Bliss</h3>
              <p>Campuran segar dari mangga, nanas, dan air kelapa. Cocok untuk merasakan cita rasa tropis!</p>
            </li>
            <li className={styles.productItem}>
              <h3>Green Detox</h3>
              <p>Campuran kuat dari kale, bayam, apel hijau, dan lemon. Bagus untuk membersihkan dan menyegarkan tubuh Anda.</p>
            </li>
            <li className={styles.productItem}>
              <h3>Berry Blast</h3>
              <p>Kombinasi lezat dari stroberi, blueberry, dan yogurt Yunani. Ideal untuk memulai hari dengan energi yang baik.</p>
            </li>
          </ul>
        </section>

        <section className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>Jelajahi Menu Smoothie Kami</h2>
          <p>Dari smoothie kaya protein hingga campuran detoks hijau, menu kami menawarkan sesuatu untuk semua orang. Jelajahi berbagai pilihan kami dan temukan minuman favorit baru Anda.</p>
        </section>
      </div>
    </Layout>
  );
}
