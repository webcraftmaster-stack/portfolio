import React from 'react'
import data from '../data/about'

export default function About() {
  return (
    <div id="about" className="about-style-six-area default-padding-top">
        <div className="container">
            <div className="row align-center">
                <div className="col-lg-3"></div>
                <div className="about-style-six col-lg-6" style={{paddingTop: "15vh"}}>
                    <h4 className="sub-title">{data.subTitle}</h4>
                    <h2 className="title">{data.title}</h2>
                    <p>
                        {data.desc}
                    </p>
                    <div className="skill-list">
                        <ul>
                            {
                                data.skills.map((item, id) => (
                                    <li key={id}>
                                        <div className="icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <span>{item.desc}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </div>
  )
}
