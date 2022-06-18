import './Index.css'
import './Index.jsx'

const HeaderApp = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwads ${index / 7}`;
        console.log(index/7);
    });
}



export default HeaderApp