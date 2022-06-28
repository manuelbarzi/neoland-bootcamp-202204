import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.sass";
import perfil from "../images/profile.png";
import clock from "../images/clock.png";
import home from "../images/home.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/clocks">
        <img src={clock} alt=""></img>
      </Link>
      <Link to="/">
        <img alt="" src={home}></img>
      </Link>
      <Link to="/profile">
        <img alt="" src={perfil}></img>
      </Link>
    </nav>
  );
}
