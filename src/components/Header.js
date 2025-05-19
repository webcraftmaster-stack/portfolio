import React from 'react'
import { Link } from 'react-router-dom';

export default function Header({mode, setMode}) {
  return (
    <header className="header-fixed">
        <div className="f-flex">
            <div className="logo">
                <Link to="/">
                    <img src="/img/logo-icon.svg" alt="Logo" />
                </Link>
            </div>
            <div className="menu">
                <ul className="nav">
                    <li>
                        <Link className="smooth-menu" to="#home">
                            <i className="fas fa-home"></i>
                            <div className="menu-name">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="smooth-menu" to="#services">
                            <i className="fas fa-cog"></i>
                            <div className="menu-name">Services</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="smooth-menu" to="#portfolio">
                            <i className="fas fa-briefcase"></i>
                            <div className="menu-name">Portfolio</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="smooth-menu" to="#resume">
                            <i className="fas fa-file-alt"></i>
                            <div className="menu-name">Resume</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="smooth-menu" to="#contact">
                            <i className="fas fa-comments"></i>
                            <div className="menu-name">Contact</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="smooth-menu" onClick={() => {
                            setMode(!mode);
                        }}>
                            <i className={mode === true ? "fas fa-sun" : "fas fa-moon"}></i>
                            <div className="menu-name">{mode === true ? "Light Mode" : "Dark Mode"}</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
