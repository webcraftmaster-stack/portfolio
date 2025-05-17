import React from 'react'
import { useParams } from 'react-router-dom'
import portfolio from '../data/portfolio';
import Breadcrumb from './Project/Breadcrumb';
import ProjectDetail from './Project/ProjectDetail';

export default function Project(url) {
    const { id } = useParams();

    const project = portfolio.projects.find((p) => p.url === id);

    if (!project) {
        return (
            <div className="auto-height bg-fixed banner-style-one" id="home">
                <div className="container">
                    <div className="double-items">
                        <div className="row align-center">
                            <h2>Project Not Found</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Breadcrumb detail={project} />
            <ProjectDetail detail={project} />
        </div>
    )
}
