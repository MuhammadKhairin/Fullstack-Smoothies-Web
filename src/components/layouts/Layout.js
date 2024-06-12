import styles from "./index.module.css";
import { useRouter } from "next/router";
import { MENU_LIST } from "./constans";
import React, { useState } from "react";
import api from "@/api";

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  const handleChangePage = (path) => {
    router.push(path)
  }

  const handleLogout = async () => {
    try {
      // Panggil API untuk logout
      await api.post("/auth/logout", {
        refreshToken: localStorage.getItem("refreshToken"), // Kirim refreshToken ke server
      });
      console.log(localStorage.getItem("refreshToken"))
      // Hapus token dari penyimpanan klien saat logout
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('username')
      setIsLoggedIn(false); // Set status login menjadi false setelah logout
      router.push('/login'); // Redirect ke halaman login setelah logout
    } catch (error) {
      console.error("Failed to logout:", error);
      // Handle error
    }
  }


  return (
    <main className={styles.layout}>
    <title>Smoothies Mapan</title>
      <asaid className={styles.sidebar}>
        <nav className={styles.sidebar__nav}>
          <ul>
            {MENU_LIST.map((menu, index) => {
              return (
                <li
                  key={index}
                  className={router.pathname === menu.path ? styles.active : ""}
                  onClick={()=> handleChangePage(menu.path)}
                >
                  {menu.name}
                </li>
              );
            })}
            {isLoggedIn && <li onClick={handleLogout}>Logout</li>}
          </ul>
        </nav>
      </asaid>
      <section className={ styles.content }>{ children }</section>
    </main>
  );
};

export default Layout;
