
import React from "react";
import styles from "./Otp.module.css"
import Logo from "../../UI/Logo";
import Button from "../../UI/Button";
import repeat from '../../../assets/icons/repeat.png'

function Otp(props) {
  return (
    <>
      <div className={styles["login-form"]}>
        <div className={styles["login-form-logo"]} >
          <Logo />
        </div>
        <div className={styles["login-form-section"]}>
          <form>
            <div className={styles["form-group"]}>
              <label> Confirmation code</label>
              <input type="text" placeholder="_ _ _ _ _" inputMode="numeric"
                pattern="[0-9]*" />
            </div>
            <div className={styles["login-form-caption"]}>
              <p>Confirm phone number with code from sms message</p>
            </div>
            <div className={styles["send-again-section"]}>
              <img src={repeat} alt="repeat icon" />
              <p> Send again</p>
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
    </>
  )
}
export default Otp;