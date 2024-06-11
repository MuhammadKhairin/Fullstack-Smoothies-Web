import React, { useState } from "react";
import styles from "./index.module.css";
import { useCart, useCartDispatch } from "@/components/context/CartContext";
import Image from "next/image";
import api from "@/api";

const Cart = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isContactingAdmin, setIsContactingAdmin] = useState(false);
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

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < carts.length; i++) {
      totalPrice += carts[i].price * carts[i].quantitiy;
    }
    return totalPrice;
  };

  const getPayUrl = () => {
    let items = carts
      .map((cart) => `${encodeURIComponent(cart.name)} (${cart.quantitiy})`)
      .join(", ");
    let totalPrice = getTotalPrice();
    return `https://wa.me/6281258266577?text=Hallo%20Admin%20saya%20mau%20order%20smoothies%20${items}%20dengan%20total%20harga%20${totalPrice}`;
  };

  const handleCheckout = async () => {
    const products = carts.map((item) => {
        return {
            id: item.id,
            quantity: item.quantitiy,
        };
    });
    try {
        const payload = {
            total_price: +getTotalPrice(),
            products,
        };

        // Ambil accessToken dari localStorage
        const accessToken = localStorage.getItem('accessToken');

        const response = await api.post("/transactions", payload, {
            headers: {
                Authorization: `Bearer ${accessToken}` // Tambahkan accessToken ke header
            }
        });
        if (response.status === 200 && carts.length > 0) {
            setIsClicked(true);
            setIsContactingAdmin(true);
            alert("Pesanan Anda Telah Diterima Silahkan Hubungi Penjual Untuk Melanjutkan Pemesanan")

            setTimeout(() => {
                window.location.reload();
            }, 8000);
        } else {
            console.error("Failed to save cart data");
        }
    } catch (error) {
        console.error("Error saving cart data", error);
    }
};


  const isCartEmpty = carts.length === 0;

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
          <p>{getTotalPrice()}</p>
        </div>
        <button onClick={handleCheckout}  className={!isCartEmpty ? "" : styles.disabled}>Checkout</button>
        <a
          href={getPayUrl()}
          className={isClicked && isContactingAdmin &&!isCartEmpty ? "" : styles.disabled}
        >
          Hubungi Penjual
        </a>
      </div>
    </div>
  );
};

export default Cart;
