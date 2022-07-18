import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  const { type, value, className, icon } = props;
  let cssClasses = `${styles.btn} ${className} meduim-text`
  return (
    <button className={cssClasses} type={type || "button"}>
      {value}
      {
        icon && (
          <img src={icon} alt="custom icon" />
        )
      }
    </button>
  )
}
export default Button;