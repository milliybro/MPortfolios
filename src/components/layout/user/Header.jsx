import { Link } from "react-router-dom";

import "./Header.scss";
import useScreenSize from "../../../utils/screenSize";
import notification from "../../../assets/bell.png";
import message from "../../../assets/conversation.png";
import light from "../../../assets/light.png";
import { useState } from "react";
import {  Drawer } from "antd";
import messagemain from "../../../assets/message.png"

const Header = () => {
  const screenSize = useScreenSize();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <header>
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/" className="nav__logo">
            {screenSize > 450 ? "MPortfolio" : "MP"}
          </Link>
          <ul className="nav__menu">
            <li className="nav__item">
              <Link className="nav__btn">
                <img src={notification} alt="" />
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__btn">
                <img onClick={showDrawer} src={message} alt="" />
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__btn">
                <img src={light} alt="" />
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/register">
                Sign Up
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/login">
                Sign In
              </Link>
            </li>
          </ul>
          <Drawer
            title="Message"
            placement="right"
            onClose={onClose}
            open={open}
            className="drawer"
          >
            <img className="message-img" src={messagemain} alt="" />
            <h1>SOON</h1>
            <p>this function will be available soon...</p>
            <button type="private" className="message-btn">
              Back to main
            </button>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;
