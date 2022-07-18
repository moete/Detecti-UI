import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import styles from "./Login.module.css";
import cover from "../assets/images/login_cover.svg"
import login from "../assets/images/cover.svg";
function Login() {
  return (
    <main className={styles["Login-page"]}>
      <Sidebar />
      <div className={styles["login-page-container"]}>
        <img src={login} alt="cover" className={styles["cover-image"]} />
      </div>
    </main>
  )
}
export default Login;