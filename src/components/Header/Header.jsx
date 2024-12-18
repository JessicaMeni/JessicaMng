import './Header.scss'
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const clickLien = () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    };

    return (
    <header className={`${isMenuOpen ? "open" : ""}`}>
        <div>
            <p className='header-logo'>Jessica Menigand</p>
        </div>
        <button className='hamburger-btn' onClick={toggleMenu}>
            <span className='hamburger-icon'>
            {isMenuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
            </span>
        </button>
        <nav className='header-nav'>
            <ul className='header-ul'>
                <li><a onClick={clickLien} href="#about">Présentation</a></li>
                <li><a onClick={clickLien} href="#skills">Compétences</a></li>
                <li><a onClick={clickLien} href="#projects">Projets</a></li>
                <li><a onClick={clickLien} href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    )
};

export default Header