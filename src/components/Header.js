import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setLogin] = useState("Login");

  const handleLogin = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Cart</li>
          <button
            className="login"
            // onClick={() => {
            //   login === "Login" ? setLogin("Logout") : setLogin("Login");
            // }}
            onClick={handleLogin}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
