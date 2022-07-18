import React from "react";
import Button from "../../UI/Button";
import Logo from "../../UI/Logo";
import styles from "./Login.module.css";


function Login(props) {
  return (
    <div className={styles["login-form"]}>
      <div className={styles["login-form-logo"]} >
        <Logo />
      </div>
      <div className={styles["login-form-caption"]}>
        <p>
          Please add your credentials for login
        </p>
      </div>
      <div className={styles["login-form-section"]}>
        <form>
          <div className={styles["form-group"]}>
            <label> Email Address</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          <div className={styles["form-group"]}>
            <label> Password </label>
            <input type="password" />
          </div>

          <div className={styles["login-button-container"]}>
            <Button
              type="button"
              value="Contunie"
              className="custom-btn"
            />
          </div>

        </form>

      </div>

    </div>

  )
}
export default Login;