import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toggleLikeProject from '../../logic/toggleLikeProject'
import Login from "../Login";
// import "./index.sass";
import "./index.css";

const Sidebar = ({ toggleSkypack, download, toggle, toggleTitle, name, projectId, onLikeClicked, project }) => {

  const navigate = useNavigate();

  const location = useLocation().pathname;
//   const isActive = (path) => location.includes(path);

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
  const handleToPens = () => {
    navigate("/pens");
  };
  const handleLikeClick = async() => {
    try {
        await toggleLikeProject(sessionStorage.token, projectId)
        onLikeClicked()
    } catch(error) {
        console.log('error like')
    }
  }
  const { likes = [] } = project || {}

  return (
    <>
      <header className="header">

        <a href="#" className="header__Logo" htmlFor="" onClick={handleToPens}>CodePen</a>

        <nav className="header__content">
                
            <ul className="header__content__links">

                <li className={`header__content__links__item ${(location === "/dashboards" || location === "/pens") && "header__content__links__item__heartNone"}`}
                  onClick={handleLikeClick}
                >
                    {
                        // name ?
                        <i className="gg-heart"></i> 
                        // <Login  />
                    }
                    { likes && likes.length> 0 && <h2>{likes.length}</h2> }
                </li>

                <li className={`header__content__links__item ${(location === "/dashboards" || location === "/pens") && "header__content__links__item__downloadNone"}`}
                    onClick={download}
                >
                    <i className="gg-software-download"></i>
                </li>
                
                <li className='header__content__links__item' 
                    onClick={toggleSkypack}
                >
                    <i class="gg-profile">SP</i>
                </li>

                <li className={`header__content__links__item ${( location === "/dashboards" || location === "/pens" )&& "header__content__links__item__codeNone"}`}
                    onClick={toggle}
                >
                    <i className="gg-code-slash"></i>
                </li>

                <li className={`header__content__links__item ${(location === "/dashboards" || location === "/pens") && "header__content__links__item__addNone"}`}
                    onClick={toggleTitle}
                >
                    <i className="gg-add-r"></i>
                </li>
                <li className={`header__content__links__item ${(location === "/" || location === "/project" || location === `/previewProject/${projectId}`) && "header__content__links__item__addNone"}`}
                    onClick={handleToProject}
                >
                    <i className="gg-arrow-left-r"></i>
                </li>
                <li className={`header__content__links__item ${location === "/dashboards" && "header__content__links__item__tikcodeNone"}`}
                    onClick={handleToDashboard}
                >
                    <i className="gg-eye"></i>
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

            <select className="header__content__select">
                {/* <option value="#">Home</option>
                <option value="#">About</option>
                <option value="#">Clients</option> */}

                {!name && (
                <select className="header__content__btns">
                    <option className="header__content__btns__btn"  onClick={handleToRegister}> Sign Up </option>
                    <option className="header__content__btns__btn" onClick={handleToLogin} >Log In </option>
                </select>
                )}

                {name && (
                <select className="header__content__btns">
                    <option className="header__content__btns__btn" onClick={handleLogoutClick}> log out </option>
                    <option className="header__content__btns__btn">{name}</option>
                </select>
                )}
            </select>


        </nav>
      </header>
    </>
  );
};
export default Sidebar;
