
import React from "react";
import SidebarOtp from "../components/Layout/SidebarOtp";
import styles from "./Otp.module.css"
import login from "../assets/images/cover.svg";

function Otp(props) {
  return (
    <main className={styles["Login-page"]}>
      <SidebarOtp />
      <div className={styles["login-page-container"]}>
        <img src={login} alt="cover" className={styles["cover-image"]} />
      </div>
    </main>
  )
}
export default Otp;