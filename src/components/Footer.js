import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="footer-social">
                            <li className="facebook">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="behance">
                                <a href="#">
                                    <i className="fab fa-behance"></i>
                                </a>
                            </li>
                            <li className="dribbble">
                                <a href="#">
                                    <i className="fab fa-dribbble"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-end">
                        <p>&copy; 2025 Ambrox. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
