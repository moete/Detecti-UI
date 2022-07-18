import React from "react";
import Login from "../shared/AuthComponents/Login";
import Logo from "../UI/Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <main className={styles["global-sidebar"]}>
      <div className={styles["login-conatiner"]}>
        <Login />
      </div>

    </main>
  )
}
export default Sidebar;