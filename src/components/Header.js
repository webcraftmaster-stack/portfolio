import React from 'react';

export default function Header() {
  return (
    <header id="home">
        <nav className="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
            <div className="container d-flex justify-content-between align-items-center">            
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img src="/img/logo.png" className="logo" alt="Logo" />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <img src="assets/img/logo.png" alt="Logo" />
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-times"></i>
                    </button>
                    
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li>
                            <a className="smooth-menu" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#expertise">expertise</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#portfolio">portfolio</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#about">about</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#blog">blog</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
            </div>   
            <div className="overlay-screen"></div>
        </nav>
    </header>
  );
}
