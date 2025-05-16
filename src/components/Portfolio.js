import React from 'react'
import portfolio from '../data/portfolio'

export default function Portfolio() {
  return (
    <div id="portfolio" className="portfolio-style-six-area default-padding-top">
        <div className="shape-animated-right">
            <img src="/img/shape/1.webp" alt="Shape" />
        </div>
        
        <div className="container">
            <div className="heading-left">
                <div className="row align-center">
                    <div className="col-lg-5">
                        <div className="left-info">
                            <h5 className="sub-title">{portfolio.subTitle}</h5>
                            <h2 className="title">{portfolio.title}</h2>
                            <div className="heading-shape">
                                <img src="/img/shape/10.png" alt="Shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="right-info">
                            <div className="fun-factor-default">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={portfolio.counter} data-speed="2000">{portfolio.counter}</div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">{portfolio.counterDesc}</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={portfolio.rating} data-speed="2000">{portfolio.rating}</div>
                                        <div className="operator">%</div>
                                    </div>
                                    <span className="medium">{portfolio.ratingDesc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 gallery-content mb--15">
                    <div className="magnific-mix-gallery masonary">
                        <div id="portfolio-grid" className="gallery-items colums-3">
                            {
                                portfolio.projects.map((project, id) => (
                                    <div className="pf-item" key={id}>
                                        <div className="overlay-content">
                                            <img src={project.img} alt="thumb" />
                                            <div className="content">
                                                <div className="title">
                                                    <span>{project.subTitle}</span>
                                                    <h5><a href="#">{project.title}</a></h5>
                                                </div>
                                                <a href="#"><i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
