import React from 'react'
import { Link } from 'react-router-dom';

export default function Breadcrumb({ detail }) {
    return (
        <div className="breadcrumb-area shadow dark bg-cover text-center text-light" style={{backgroundImage: `url(${detail.bannerImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h1>Project <b>{detail.title}</b></h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link to="/">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Project
                                </Link>
                            </li>
                            <li>
                                {detail.url}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
