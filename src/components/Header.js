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
                        <Link className="smooth-menu" to="/">
                            <i className="fas fa-home"></i>
                            <div className="menu-name">Home</div>
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
