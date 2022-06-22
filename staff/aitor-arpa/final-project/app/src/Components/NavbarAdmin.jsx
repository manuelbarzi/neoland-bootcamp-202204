import React from "react";
import { Link } from "react-router-dom";
import "./NavbarAdmin.sass";
import perfil from "../Img/profile.png";
import clock from "../Img/clock.png";
import addJob from "../Img/addJob.png";
import addUser from "../Img/addUser.png";
import home from "../Img/home.png";

export default function NavbarAdmin() {
  return (
    <nav className="navbar">
      <Link to="/admin/clock">
        <img alt="" src={clock}></img>
      </Link>
      <Link to="/admin/user">
        <img src={addUser} alt=""></img>
      </Link>
      <Link to="/admin">
        <img src={home} alt=""></img>
      </Link>
      <Link to="/admin/job">
        <img alt="" src={addJob}></img>
      </Link>
      <Link to="/admin/profile">
        <img alt="" src={perfil}></img>
      </Link>
    </nav>
  );
}
