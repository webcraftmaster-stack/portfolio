import React from 'react'
import { useParams } from 'react-router-dom'
import portfolio from '../data/portfolio';

export default function Project(url) {
    const { id } = useParams();

    const project = portfolio.projects.find((p) => p.url === id);

    if (!project) {
        return <h2>Project not found</h2>
    }

    return (
        <div className="auto-height bg-fixed banner-style-one" id="home">
            <div className="container">
                <div className="double-items">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <h2>{project.title}</h2>
                        </div>
                        <div className="col-lg-8">
                            <p>{project.desc}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
