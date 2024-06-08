import React from "react";
import styles from "./index.module.css";
import { useCart, useCartDispatch } from "@/components/context/CartContext";
import Image from "next/image";

const Cart = () => {
  const carts = useCart();
  const dispatch = useCartDispatch();

  const handleAddToCart = (products) => {
    dispatch({
      type: "add",
      payload: products,
    });
  };

  const handleDecreaseCart = (products) => {
    dispatch({
      type: "decrese",
      payload: products,
    });
  };

  return (
    <div className={styles.cart}>
      <h3>Cart</h3>
      <div className={styles["cart__cart-list"]}>
        {carts.map((cart, index) => {
          return (
            <div key={index} className={styles["cart-item"]}>
              <div className={styles["cart-item_image"]}>
                <Image
                  src={cart.img_product}
                  alt={cart.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles["cart-item__desc"]}>
                <p>{cart.name}</p>
                <p>{cart.price}</p>
              </div>
              <div className={styles["cart-item__action"]}>
                <button onClick={() => handleDecreaseCart(cart)}>-</button>
                <p>{cart.quantitiy}</p>
                <button onClick={() => handleAddToCart(cart)}>+</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles["cart__checkout"]}>
        <div className={styles["cart__total-price"]}>
          <p>Total Harga</p>
          <p>xxxxx</p>
        </div>
        <div className={styles["cart__pay"]}>
          <label>Bayar</label>
          <input placeholder="-"></input>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
