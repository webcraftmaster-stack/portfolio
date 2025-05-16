import React from 'react'
import profile from '../data/profile'
import banner from '../data/banner'

export default function Banner() {
  return (
    <div className="auto-height bg-fixed banner-style-one">
        <div className="container">
            <div className="double-items">
                <div className="row align-center">

                    <div className="col-lg-6 info">
                        <h1 className="text-invisible">WELCOME</h1>
                        <h2>Hey <img src="/img/shape/4.png" alt="Icon" /> I'm <span>{profile.firstName}</span></h2>
                        <h3 className="title">
                            <span className="header-caption" id="page-top">
                                <span className="cd-headline clip is-full-width">
                                    <span className="cd-words-wrapper">
                                        {
                                            profile.roles.map((role, id) => (
                                                <b className={id === 0 ? "is-visible" : "is-hidden"} key={id}>
                                                    {role}
                                                </b>
                                            ))
                                        }
                                    </span>
                                </span>
                            </span>
                        </h3>
                        <div className="button mt-55">
                            <a className="btn btn-md circle btn-dark" href="#resume">My Resume</a>
                        </div>
                    </div>

                     <div className="col-lg-6 thumb" data-wow-delay="900ms">
                        <img className=" wow fadeInDown" src={profile.picture} alt="Thumb" />
                        <div className="shape-center">
                            <img src={banner.thumb} alt="Thumb" />
                        </div>
                    </div>
                    
                </div>
                {
                <div className="personal-social">
                    <ul>
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
                }
            </div>
        </div>
    </div>
  )
}
