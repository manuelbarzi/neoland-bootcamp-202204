import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import saveProject from "../../logic/saveProject";
import toggleLikeProject from '../../logic/toggleLikeProject'

import "./index.css";

const Sidebar = ({ toggleSkypack, download, toggle, toggleTitle, name, projectId, onLikeClicked, project, updateProject }) => {

  const navigate = useNavigate();

  const location = useLocation().pathname;

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

    }
  }
  const { likes = [] } = project || {}
  return (
    <>
      <header className="header">

        <img className="svg" src="https://www.svgrepo.com/show/327338/logo-apple-ar.svg" alt="codepen" onClick={handleToPens} /> 

        <nav className="header__content">
                
            <ul className="header__content__links">

                <li className={`header__content__links__item ${(location === "/dashboards" || location === "/pens" || location === "/login" || location === "/register" || location === "/" || location === "/project") && "header__content__links__item__heartNone"}`}
                  onClick={handleLikeClick}
                >
                  <div className="header__content__links__item__likes">
                    { !name || likes && likes.length> 0 && <h2 className="header__content__links__item__like">{likes.length}</h2> }
                    {
                      name && <span className="material-icons">favorite_border</span> 
                    }
                  </div>
                </li>

                <li className={`header__content__links__item ${(location === "/dashboards" || location === "/pens" || location === "/login" || location === "/register") && "header__content__links__item__downloadNone"}`}
                    onClick={download}
                >
                    <span className="material-icons">get_app</span>
                </li>

                <li className={`header__content__links__item ${( location === "/dashboards" || location === "/pens" || location === "/login" || location === "/register")&& "header__content__links__item__codeNone"}`}
                    onClick={toggle}
                >
                    <span className="material-icons">data_object</span>
                </li>

                { !projectId &&
                  <li className={`header__content__links__item ${(location === "/dashboards" || location === "/pens" || location === "/login" || location === "/register") && "header__content__links__item__addNone"}`}
                    onClick={toggleTitle}
                  >
                      <span className="material-icons">add</span>
                  </li>
                  }
                  { projectId &&
                  <li className={`header__content__links__item ${(location === "/dashboards" || location === "/pens" || location === "/login" || location === "/register") && "header__content__links__item__addNone"}`}
                    onClick={updateProject}
                  >
                      <span className="material-icons">save</span>
                  </li>
                  }

                <li className={`header__content__links__item ${(location === "/" || location === "/project" || location === `/previewProject/${projectId}`) && "header__content__links__item__addNone"}`}
                    onClick={handleToProject}
                >
                    <span class="material-symbols-outlined">dashboard_customize</span>
                </li>
                {name && 
                <li className={`header__content__links__item ${(location === "/dashboards" || location === "/login" || location === "/register" )&& "header__content__links__item__tikcodeNone"}`}
                    onClick={handleToDashboard}
                >
                  <span className="material-icons">visibility</span>
                </li>}
            </ul>
            {!name && (
            <div className="header__content__btns">
                <button className={`header__content__btns__btn ${(location === "/login" || location === "/register") && "header__content__btns__NoneBtn"}`} 
                  onClick={handleToRegister}> Sign Up </button>
                <button className={`header__content__btns__btn ${(location === "/login" || location === "/register") && "header__content__btns__NoneBtn"}`}  onClick={handleToLogin} >Log In </button>
            </div>
            )}

            {name && (
            <div className="header__content__btns">
              <button className="header__content__btns__btn" onClick={handleLogoutClick}> log out </button>
              <button className="header__content__btns__btn">{name}</button>
            </div>
            )}

            {/* <div class="header__content__select">
                <select>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Queens">Queens</option>
                </select>
            </div> */}
        </nav>
      </header>
    </>
  );
};
export default Sidebar;
