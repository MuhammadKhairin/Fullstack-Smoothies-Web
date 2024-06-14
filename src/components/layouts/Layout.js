import styles from "./index.module.css";
import { useRouter } from "next/router";
import { MENU_LIST } from "./constans"; 
import React, { useState, useEffect } from "react"; 
import api from "@/api";

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const router = useRouter();

  // Gunakan useEffect untuk validasi inisial
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true); 
    } else {
      setIsLoggedIn(false); 
    }
  }, []);

  const handleChangePage = (path) => {
    router.push(path);
  };

  //Logout Function
  const handleLogout = async () => {
    try {
      await api.post("/auth/logout", {
        refreshToken: localStorage.getItem("refreshToken"),
      });

      // Hapus token dan username dari penyimpanan klien saat logout
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("username");

      setIsLoggedIn(false); 
      router.push("/login"); 
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <main className={styles.layout}>
      <title>Smoothies Mapan</title>
      <aside className={styles.sidebar}>
        <nav className={styles.sidebar__nav}>
          <ul>
            {MENU_LIST.map((menu, index) => (
              <li
                key={index}
                className={
                  router.pathname === menu.path ? styles.active : ""
                }
                onClick={() => handleChangePage(menu.path)}
              >
                {menu.name}
              </li>
            ))}
            {isLoggedIn && <li onClick={handleLogout}>Logout</li>}
          </ul>
        </nav>
      </aside>
      <section className={styles.content}>{children}</section>
    </main>
  );
};

export default Layout;
