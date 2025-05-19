import React, { useState } from 'react'
import contact from '../data/contact'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    return (
        <div id="contact" className="contact-area shape-less default-padding overflow-hidden">
            <h2 className="text-shade">{contact.backgroundTitle}</h2>
            <div className="container">
                <div className="contact-content">
                    <div className="row align-center">
                        <div className="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                            <div className="form-box">
                                <h2>{contact.title}</h2>
                                <p>
                                    {contact.desc}
                                </p>
                                <form action="/mail/contact.php" method="POST" className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button type="submit" name="submit" id="submit">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg"></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4 offset-lg-1 info">
                            <div className="content">
                                <ul>
                                    <li className="contact-info-list wow fadeInUp">
                                        <div className="icon">
                                            <i className="fas fa-envelope-open-text"></i>
                                        </div>
                                        <div className="info">
                                            <p>Our Email</p>
                                            <h5>
                                                <a href={"mailto:" + contact.mail}>{contact.mail}</a> 
                                            </h5>
                                        </div>
                                    </li>
                                    <li className="contact-info-list wow fadeInUp" data-wow-delay="300ms">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="info">
                                            <p>Address</p>
                                            <h5>
                                                {contact.address}
                                            </h5>
                                        </div>
                                    </li>
                                    <li className="contact-info-list wow fadeInUp" data-wow-delay="500ms">
                                        <div className="icon">
                                            <i className="fas fa-headphones-alt"></i>
                                        </div>
                                        <div className="info">
                                            <p>Phone</p>
                                            <h5>
                                                <a href="tel:+4733378901">{contact.phone1}</a> 
                                                <br/><a href="tel:+4733378901">{contact.phone2}</a>
                                            </h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
