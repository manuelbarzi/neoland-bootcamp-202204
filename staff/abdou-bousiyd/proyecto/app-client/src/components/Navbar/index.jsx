import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.sass";

const Sidebar = ({ toggle, toggleTitle, name }) => {
  const navigate = useNavigate();

  const location = useLocation().pathname;
  const isActive = (path) => location.includes(path);

  const handleLogoutClick = () => {
    delete sessionStorage.token;
    window.location.reload();
  };

  const handleToRegister = () => {
    navigate("/register");
  };

  const handleToLogin = () => {
    navigate("/login");
  };
  const handleToProject = () => {
    navigate("/");
  };
  const handleToDashboard = () => {
    navigate("/dashboards");
  };

  return (
    <header className="header">
      <div className="header__content">
        <ul className="header__content__links">
          <li
            className={`header__content__links__item ${
              location === "/dashboards" &&
              "header__content__links__item__heartNone"
            }`}
          >
            <i className="gg-heart"></i>
          </li>
          <li
            className={`header__content__links__item ${
              location === "/dashboards" &&
              "header__content__links__item__downloadNone"
            }`}
          >
            <i className="gg-software-download"></i>
          </li>
          <li
            className={`header__content__links__item ${
              location === "/dashboards" &&
              "header__content__links__item__codeNone"
            }`}
            onClick={toggle}
          >
            <i className="gg-code-slash"></i>
          </li>

          <li
            className={`header__content__links__item ${
              location === "/dashboards" &&
              "header__content__links__item__addNone"
            }`}
            onClick={toggleTitle}
          >
            <i className="gg-add-r"></i>
          </li>
          <li
            className={`header__content__links__item ${
              (location === "/" || location === "/project") &&
              "header__content__links__item__addNone"
            }`}
            onClick={handleToProject}
          >
            <i class="gg-arrow-left-r"></i>
          </li>
          <li
            className={`header__content__links__item ${
              location === "/dashboards" &&
              "header__content__links__item__tikcodeNone"
            }`}
            onClick={handleToDashboard}
          >
            <i class="gg-tikcode"></i>
          </li>
        </ul>
        {!name && (
          <div className="header__content__btns">
            <button
              className="header__content__btns__btn"
              onClick={handleToRegister}
            >
              Sign Up
            </button>
            <button
              className="header__content__btns__btn"
              onClick={handleToLogin}
            >
              Log In
            </button>
          </div>
        )}

        {name && (
          <div className="header__content__btns">
            <button
              className="header__content__btns__btn"
              onClick={handleLogoutClick}
            >
              log out
            </button>
            <button className="header__content__btns__btn">{name}</button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Sidebar;
