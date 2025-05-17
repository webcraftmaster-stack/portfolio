import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function ProjectDetail({ detail }) {
  return (
    <div className="project-details-area default-padding">
        <div className="container">
            <div className="project-details-items">
                <div className="project-thumb">
                    <img src={detail.thumbImg} alt="Thumb" />
                </div>
                <div className="top-info">
                    <div className="row">
                        <div className="col-xl-12 left-info">
                            <div className="project-info mt-md-50 mt-xs-40 mb-40">
                                <div className="content">
                                    <ul className="project-basic-info">
                                        <li>
                                            Client <span>{detail.client}</span>
                                        </li>
                                        <li>
                                            Project Type <span>{detail.projectType}</span>
                                        </li>
                                        <li>
                                            Date <span>{detail.date}</span>
                                        </li>
                                        <li>
                                            Address <span>{detail.address}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-content mt-40">
                    
                    <p>{detail.desc}</p>
                </div>

                <div>
                    <Carousel>
                        {
                            detail.print.map((item, id) => (
                                <Carousel.Item key={id}>
                                    <div>
                                        <img src={item.img} alt="Thumb" />
                                    </div>
                                    <Carousel.Caption>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}
