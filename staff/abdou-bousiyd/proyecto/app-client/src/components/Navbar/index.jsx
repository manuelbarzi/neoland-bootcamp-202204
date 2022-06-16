import React from 'react'
import { useNavigate } from "react-router-dom";
import './index.sass'

const Sidebar = ({toggle, toggleTitle, name}) => {
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        delete sessionStorage.token
        window.location.reload()
    }

    const handleToRegister = () => {
        navigate('/register')
    }

    const handleToLogin = () => {
        navigate('/register')
    }
    
    return (
        <header className='header'>
            <div className='header__content'>
                <ul className='header__content__links'>
                    <li className='header__content__links__item'><i className="gg-heart"></i></li>
                    <li className='header__content__links__item'><i className="gg-software-download"></i></li>
                    <li className='header__content__links__item' onClick={toggle}><i className="gg-code-slash"></i></li>
                    <li className='header__content__links__item' onClick={toggleTitle}><i className="gg-add-r"></i></li>
                </ul>
                {!name &&
                <div className='header__content__btns'>
                    <button className="header__content__btns__btn" onClick={handleToRegister}>Sign Up</button>
                    <button className="header__content__btns__btn" onClick={handleToLogin}>Log In</button>
                </div>
                }

                {name && 
                <div className='header__content__btns'>
                    <button className="header__content__btns__btn" onClick={handleLogoutClick}>log out</button>
                    <button className="header__content__btns__btn">{name}</button>
                </div>
                }
            </div>

        </header>
    )
}
export default Sidebar;















// import React from 'react'
// import './index.sass'

// const Sidebar = ({toggle}) => {
//     return (
//         <header className='header'>
//             <div className='header--content'>
//                 <ul className='header--content--items'>
//                     <li className='header--content--item'><i className="gg-profile"></i></li>
//                     <li className='header--content--item'><i className="gg-software-download"></i></li>
//                     <li className='header--content--item' onClick={toggle}><i className="gg-code-slash"></i></li>
//                 </ul>
//                 <div className='buttons'>
//                     <button className="header--btn">Sign Up</button>
//                     <button className="header--btn">Log In</button>
//                 </div>
//             </div>
//         </header>
//     )
// }
// export default Sidebar;