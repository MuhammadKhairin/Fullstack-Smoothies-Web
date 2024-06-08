import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { useCartDispatch } from "@/components/context/CartContext";

const ProductList = ({ products }) => {
  const dispatch = useCartDispatch()

  const handleAddToCart = products =>{
    dispatch({
        type : 'add',
        payload: products
    })
  }

  return (
    <div className={styles["product-list"]}>
      {products.map((products, index) => {
        return (
          <div key={index} className={styles["product-list__product-card"]}>
            <div className={styles["product-list__product-card__image"]}>
              <Image
                src={products.img_product}
                alt={products.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles["product-list__product-card__desc"]}>
              <p>{products.name}</p>
              <button onClick={() => handleAddToCart(products)}>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
