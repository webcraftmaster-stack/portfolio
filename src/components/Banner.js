import React from 'react'
import profile from '../data/profile'

export default function Banner() {
  return (
    <div className="auto-height bg-fixed banner-style-one" id="home">
        <div className="container">
            <div className="double-items">
                <div className="row align-center" style={{height: "80vh"}}>

                    <div className="col-lg-12 info">
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
                </div>
            </div>
        </div>
    </div>
  )
}
