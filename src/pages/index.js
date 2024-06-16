import Layout from "@/components/layouts/Layout";
import React from "react";
import styles from "./style/index.module.css";
import { useRouter } from "next/router";


export default function Home() {
  //call useRouter
  const router = useRouter();

  //Navigate menu Button
  const handleMenu = () => {
    router.push('/menu')
  }
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
              <h3>Smoothies Mangga</h3>
              <p>Smoothies Ini dibuat Menggunakan Buah Mangga Yang Segar dan Yang Lebih Nikmat Bercampur dengan Berbagai Toping Pelengkap</p>
            </li>
            <li className={styles.productItem}>
              <h3>Smoothies Strawberry</h3>
              <p>Smoothies Ini dibuat Menggunakan Buah Strawberry Yang Segar dan Yang Lebih Nikmat Bercampur dengan Berbagai Toping Pelengkap</p>
            </li>
          </ul>
        </section>

        <section className={styles.menuSection}>
          <h2 className={styles.sectionTitle}>Jelajahi Menu Smoothie Kami</h2>
          <p>Kunjungi Daftar Menu Kami Kami Menjual Berbagai Macam Smoothies</p>
          <button onClick={handleMenu}>Menu</button>
        </section>
      </div>
    </Layout>
  );
}
