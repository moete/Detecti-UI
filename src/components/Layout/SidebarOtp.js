
import React from "react";
import Otp from "../shared/AuthComponents/Otp";
import styles from "./SidebarOtp.module.css"
function SidebarOtp(props) {
  return (
    <main className={styles["global-sidebar"]}>
      <div className={styles["login-conatiner"]}>
        <Otp />
      </div>

    </main>
  )
}
export default SidebarOtp;