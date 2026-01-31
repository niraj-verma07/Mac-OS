import React from "react";
import "./nav.scss";
import DateTime from "./DateTime";
const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="./navbar-icons/apple.svg" alt="" />
        </div>

        <div className="nav-item">
          <p>Niraj Kumar Verma</p>
        </div>

        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <a href="https://x.com/devniraj07" target="blank">
            Twitter
          </a>
        </div>
        <div className="nav-item">
          <a href="https://github.com/niraj-verma07" target="blank">
            Github
          </a>
        </div>
      </div>
      <div className="right">
        <div className="nav-icon">
          <img src="./navbar-icons/wifi.svg" alt="" />
        </div>

        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
