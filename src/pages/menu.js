import api from "@/api";
import Cart from "@/components/elements/Cart/Cart";
import ProductList from "@/components/elements/ProductList/ProductList";
import Layout from "@/components/layouts/Layout";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css"
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // Sertakan Access Token dalam header
        }
      });
      const data = await response.data;
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      // Jika terjadi kesalahan saat mengambil produk, redirect ke halaman login
      router.push('/login');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <h1>Menu</h1>
      <div className={styles.home}>
        <ProductList products={products} />
        <Cart />
      </div>
    </Layout>
  );
}
