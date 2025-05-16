import React from 'react'
import services from '../data/services'

export default function Services() {
  return (
    <div id="services" className="services-style-one-area box-layout default-padding bottom-less bg-light">
        <div className="blur-bg"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">{services.subtitle}</h4>
                        <h2 className="title">{services.title}</h2>
                        <div className="devider"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {
                    services.services.map(service => (
                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <img src={service.imgIcon} alt="Icon" />
                                <h4><a data-bs-toggle="modal" data-bs-target="#serviceSingleModal">{service.title}</a></h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
        <div className="modal fade" id="serviceSingleModal" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div className="modal-content">
                    
                    <div className="modal-body">

                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="services-single-content">
                            <div className="thumb">
                                <img src={services.modal.thumb} alt="Thumb" />
                            </div>
                            <h2>{services.modal.title}</h2>
                            <p>
                                {services.modal.detail}
                            </p>
                            <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="content">
                                            <h4>{services.modal.features.leftTitle}</h4>
                                            <ul className="feature-list-item">
                                                {
                                                    services.modal.features.leftItems.map((item, id) => (
                                                        <li key={id}>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-6 mt-xs-30">
                                        <div className="content">
                                            <h4>{services.modal.features.rightTitle}</h4>
                                            <p>
                                                {services.modal.features.rightDesc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>{services.modal.rightTitle}</h4>
                            <p>
                                {services.modal.roleDesc}
                            </p>
    
                            <div className="faq-style-one mt-40">
                                <h3 className="mb-25">{services.modal.faqTitle}</h3>
                                <div className="accordion" id="faqAccordion">
                                    {
                                        services.modal.faqDetail.map((detail, id) => (
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id={"heading" + detail.id}>
                                                    <button className={"accordion-button" + (id !== 0 ? " collapsed" : "")} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + detail.id} aria-expanded={id === 0 ? "true" : "false"} aria-controls={"collapse" + detail.id}>
                                                        {detail.title}
                                                    </button>
                                                </h2>
                                                <div id={"collapse" + detail.id} className={"accordion-collapse collapse" + (id === 0 ? " show" : "")} aria-labelledby={"heading" + detail.id} data-bs-parent="#faqAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {detail.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
    
                            <div className="services-more mt-50">
                                <h3>{services.services.title}</h3>
                                <div className="row">
                                    {
                                        services.serviceMore.data.map(item => (
                                            <div className="col-md-6">
                                                <div className="item">
                                                    <i className={item.img}></i>
                                                    <h4><a>{item.title}</a></h4>
                                                    <p>
                                                        {item.description}
                                                    </p>
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
        </div>
    </div>
  )
}
