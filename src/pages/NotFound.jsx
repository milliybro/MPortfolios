import { Fragment } from "react";
import found from "../assets/notfound.png";
import { NavLink } from "react-router-dom"
import "./style.scss"
const NotFoundPage = () => {
  return (
    <Fragment>
      <section className="notFound">
        <img src={found} alt="" />
        <h1>This page doesn’t exist</h1>
        <h4>Please check your URL or return to <span>MPortfolio</span> home.</h4>
        <NavLink className="foundbtn" to={"/"}>Go to your feed</NavLink>
      </section>
    </Fragment>
  );
};

export default NotFoundPage;
