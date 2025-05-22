import React from 'react'
import data from '../data/about'

export default function About() {
  return (
    <div id="about" className="about-style-six-area default-padding-top">
        <div className="container">
            <div className="row align-center">
                <div className="col-lg-3"></div>
                <div className="about-style-six col-lg-6 my-5">
                    <h4 className="sub-title">{data.subTitle}</h4>
                    <h2 className="title">{data.title}</h2>
                    <p>
                        {data.desc}
                    </p>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </div>
  )
}
