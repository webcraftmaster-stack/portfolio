import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="footer-social">
                            <li className="facebook">
                                <span>
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                            </li>
                            <li className="behance">
                                <span>
                                    <i className="fab fa-behance"></i>
                                </span>
                            </li>
                            <li className="dribbble">
                                <span>
                                    <i className="fab fa-dribbble"></i>
                                </span>
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
