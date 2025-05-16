import React from 'react'
import services from '../data/services'

export default function Services() {
  return (
    <div id="services" class="services-style-one-area box-layout default-padding bottom-less bg-light">
        <div class="blur-bg"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="site-heading text-center">
                        <h4 class="sub-title">{services.subtitle}</h4>
                        <h2 class="title">{services.title}</h2>
                        <div class="devider"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                {
                    services.services.map(service => (
                        <div class="service-style-one col-lg-4 col-md-6">
                            <div class="service-style-one-item">
                                <img src={service.imgIcon} alt="Icon" />
                                <h4><a href="#" data-bs-toggle="modal" data-bs-target="#serviceSingleModal">{service.title}</a></h4>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        
        <div class="modal fade" id="serviceSingleModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div class="modal-content">
                    
                    <div class="modal-body">

                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="services-single-content">
                            <div class="thumb">
                                <img src={services.modal.thumb} alt="Thumb" />
                            </div>
                            <h2>{services.modal.title}</h2>
                            <p>
                                {services.modal.detail}
                            </p>
                            <div class="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="content">
                                            <h4>{services.modal.features.leftTitle}</h4>
                                            <ul class="feature-list-item">
                                                {
                                                    services.modal.features.leftItems.map((item, id) => (
                                                        <li key={id}>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-6 mt-xs-30">
                                        <div class="content">
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
    
                            <div class="faq-style-one mt-40">
                                <h3 class="mb-25">{services.modal.faqTitle}</h3>
                                <div class="accordion" id="faqAccordion">
                                    {
                                        services.modal.faqDetail.map((detail, id) => (
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id={"heading" + detail.id}>
                                                    <button class={"accordion-button" + (id !== 0 ? " collapsed" : "")} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + detail.id} aria-expanded={id === 0 ? "true" : "false"} aria-controls={"collapse" + detail.id}>
                                                        {detail.title}
                                                    </button>
                                                </h2>
                                                <div id={"collapse" + detail.id} class={"accordion-collapse collapse" + (id === 0 ? " show" : "")} aria-labelledby={"heading" + detail.id} data-bs-parent="#faqAccordion">
                                                    <div class="accordion-body">
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
    
                            <div class="services-more mt-50">
                                <h3>{services.services.title}</h3>
                                <div class="row">
                                    {
                                        services.serviceMore.data.map(item => (
                                            <div class="col-md-6">
                                                <div class="item">
                                                    <i class={item.img}></i>
                                                    <h4><a href="#">{item.title}</a></h4>
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
