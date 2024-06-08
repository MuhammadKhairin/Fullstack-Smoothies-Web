import api from "@/api";
import Cart from "@/components/elements/Cart/Cart";
import ProductList from "@/components/elements/ProductList/ProductList";
import Layout from "@/components/layouts/Layout";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css"

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await api.get("/products");
    const data = await response.data;
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
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
