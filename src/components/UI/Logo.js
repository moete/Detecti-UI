import React from "react";
import logo from "../../assets/images/logo.svg";

function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h5
        style={{
          fontSize: "25px",
          lineHeight: "34px",
          margin: "10px"
        }}
      >
        Login</h5>
    </div >
  )


}
export default Logo;