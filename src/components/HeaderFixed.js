import React from 'react'

export default function HeaderFixed() {
  return (
    <header class="header-fixed">
        <div class="f-flex">
            <div class="logo">
                <a href="#home">
                    <img src="/img/logo-icon.svg" alt="Logo" />
                </a>
            </div>
            <div class="menu">
                <ul class="nav">
                    <li>
                        <a class="smooth-menu" href="#home">
                            <i class="fas fa-home"></i>
                            <div class="menu-name">Home</div>
                        </a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#services">
                            <i class="fas fa-cog"></i>
                            <div class="menu-name">Services</div>
                        </a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#portfolio">
                            <i class="fas fa-briefcase"></i>
                            <div class="menu-name">Portfolio</div>
                        </a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#about">
                            <i class="fas fa-user"></i>
                            <div class="menu-name">About</div>
                        </a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#resume">
                            <i class="fas fa-file-alt"></i>
                            <div class="menu-name">Resume</div>
                        </a>
                    </li>
                    <li>
                        <a class="smooth-menu" href="#contact">
                            <i class="fas fa-comments"></i>
                            <div class="menu-name">Contact</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
