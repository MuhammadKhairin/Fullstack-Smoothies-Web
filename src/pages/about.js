import Layout from "@/components/layouts/Layout";
import React from "react";
import styles from "./style/about.module.css";

export default function About() {
  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.section}>
          <h1 className={styles.mainTitle}>Tentang Kami</h1>
          <p className={styles.description}>Selamat datang di Smoothies Mapan! Kami berdedikasi untuk menghadirkan minuman smoothies yang sehat dan lezat.</p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Sejarah Kami</h2>
          <p className={styles.content}>
            Smoothies Mapan didirikan pada tahun 2023 oleh sekelompok pecinta kesehatan dan kebugaran yang ingin menghadirkan minuman sehat dan lezat ke masyarakat luas. Dimulai dari sebuah dapur kecil di kota Banjarbaru, kami telah berkembang menjadi brand terkemuka dengan ratusan pelanggan setia di Banjarbaru.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Nilai-Nilai Inti</h2>
          <ul className={styles.content}>
            <li><strong>Kualitas:</strong> Kami hanya menggunakan bahan-bahan alami terbaik tanpa tambahan pengawet atau perasa buatan.</li>
            <li><strong>Kesehatan:</strong> Kami berkomitmen untuk mendukung gaya hidup sehat melalui produk kami.</li>
            <li><strong>Keberlanjutan:</strong> Kami menggunakan kemasan ramah lingkungan dan berpartisipasi dalam program pengurangan sampah plastik.</li>
            <li><strong>Kepuasan Pelanggan:</strong> Kepuasan Anda adalah prioritas kami. Kami selalu mendengarkan dan berusaha memberikan yang terbaik.</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Informasi Kontak</h2>
          <p className={styles.content}>
            Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan atau ingin tahu lebih banyak tentang produk kami, jangan ragu untuk menghubungi kami:
          </p>
          <p className={styles.content}><strong>Instagram:</strong> @smoothies_mapan</p>
          <p className={styles.content}><strong>Telepon:</strong> +62 831 4202 7543</p>
          <p className={styles.content}><strong>Alamat:</strong> Jln.RO Ulin,Banjarbaru,di sebrang (Alfamart)</p>
        </div>
      </div>
    </Layout>
  );
}
