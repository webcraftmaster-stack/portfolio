import React from 'react'

export default function Header({mode, setMode}) {
  return (
    <header className="header-fixed">
        <div className="f-flex">
            <div className="logo">
                <a href="#home">
                    <img src="/img/logo-icon.svg" alt="Logo" />
                </a>
            </div>
            <div className="menu">
                <ul className="nav">
                    <li>
                        <a className="smooth-menu" href="#home">
                            <i className="fas fa-home"></i>
                            <div className="menu-name">Home</div>
                        </a>
                    </li>
                    <li>
                        <a className="smooth-menu" href="#services">
                            <i className="fas fa-cog"></i>
                            <div className="menu-name">Services</div>
                        </a>
                    </li>
                    <li>
                        <a className="smooth-menu" href="#portfolio">
                            <i className="fas fa-briefcase"></i>
                            <div className="menu-name">Portfolio</div>
                        </a>
                    </li>
                    <li>
                        <a className="smooth-menu" href="#resume">
                            <i className="fas fa-file-alt"></i>
                            <div className="menu-name">Resume</div>
                        </a>
                    </li>
                    <li>
                        <a className="smooth-menu" href="#contact">
                            <i className="fas fa-comments"></i>
                            <div className="menu-name">Contact</div>
                        </a>
                    </li>
                    <li>
                        <a className="smooth-menu" href="#dark" onClick={() => {
                            setMode(!mode);
                        }}>
                            <i className={mode === true ? "fas fa-sun" : "fas fa-moon"}></i>
                            <div className="menu-name">{mode === true ? "Light Mode" : "Dark Mode"}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
