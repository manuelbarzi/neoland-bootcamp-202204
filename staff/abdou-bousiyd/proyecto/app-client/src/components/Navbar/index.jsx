import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import "./index.sass";
import "./index.css";

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
  const handleBtnMenu = () => {
    const btn_menu = document.querySelector(".header__content__btnResposive");
    if (btn_menu) {
      btn_menu.addEventListener("click", () => {
        const menu_items = document.querySelector(".header__content__Items");
        menu_items.classList.toggle("show");
        console.log(menu_items);
      });
    }
  };

  return (
    <>
      <nav className="header">
        <label className="header__Logo" htmlFor="">CodePen</label>

        <div className="header__content">
            <ul className="header__content__links">

            <li className={`header__content__links__item ${location === "/dashboards" && "header__content__links__item__heartNone"}`}>
                <i className="gg-heart"></i>
            </li>

            <li className={`header__content__links__item ${location === "/dashboards" &&"header__content__links__item__downloadNone"}`}>
                <i className="gg-software-download"></i>
            </li>

            <li className={`header__content__links__item ${ location === "/dashboards" && "header__content__links__item__codeNone"}`}
                onClick={toggle}
            >
                <i className="gg-code-slash"></i>
            </li>

            <li className={`header__content__links__item ${location === "/dashboards" && "header__content__links__item__addNone"}`}
                onClick={toggleTitle}
            >
                <i className="gg-add-r"></i>
            </li>
            <li className={`header__content__links__item ${(location === "/" || location === "/project") && "header__content__links__item__addNone"}`}
                onClick={handleToProject}
            >
                <i class="gg-arrow-left-r"></i>
            </li>
            <li className={`header__content__links__item ${location === "/dashboards" && "header__content__links__item__tikcodeNone"}`}
                onClick={handleToDashboard}
            >
                <i class="gg-eye"></i>
            </li>

            </ul>
            {!name && (
            <div className="header__content__btns">
                <button className="header__content__btns__btn"  onClick={handleToRegister}> Sign Up </button>
                <button className="header__content__btns__btn" onClick={handleToLogin} >Log In </button>
            </div>
            )}

            {name && (
            <div className="header__content__btns">
                <button className="header__content__btns__btn" onClick={handleLogoutClick}> log out </button>
                <button className="header__content__btns__btn">{name}</button>
            </div>
            )}
        </div>


        {/* <span className="header__content__btnResposive">
          <i onClick={handleBtnMenu} class="gg-menu"></i>
        </span> */}
      </nav>

      {/* {!name && (
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
      )} */}
    </>
  );
};
export default Sidebar;
