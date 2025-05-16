import React, { use, useState } from 'react'
import contact from '../data/contact'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');

    return (
        <div id="contact" class="contact-area shape-less default-padding overflow-hidden">
            <h2 class="text-shade">{contact.backgroundTitle}</h2>
            <div class="container">
                <div class="contact-content">
                    <div class="row align-center">
                        <div class="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                            <div class="form-box">
                                <h2>{contact.title}</h2>
                                <p>
                                    {contact.desc}
                                </p>
                                <form action="/mail/contact.php" method="POST" class="contact-form">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input class="form-control" id="name" name="name" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input class="form-control" id="email" name="email" placeholder="Email*" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input class="form-control" id="phone" name="phone" placeholder="Phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                                <span class="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group comments">
                                                <textarea class="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <button type="submit" name="submit" id="submit">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 alert-notification">
                                        <div id="message" class="alert-msg"></div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-4 offset-lg-1 info">
                            <div class="content">
                                <ul>
                                    <li class="contact-info-list wow fadeInUp">
                                        <div class="icon">
                                            <i class="fas fa-envelope-open-text"></i>
                                        </div>
                                        <div class="info">
                                            <p>Our Email</p>
                                            <h5>
                                                <a href={"mailto:" + contact.mail}>{contact.mail}</a> 
                                            </h5>
                                        </div>
                                    </li>
                                    <li class="contact-info-list wow fadeInUp" data-wow-delay="300ms">
                                        <div class="icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div class="info">
                                            <p>Address</p>
                                            <h5>
                                                {contact.address}
                                            </h5>
                                        </div>
                                    </li>
                                    <li class="contact-info-list wow fadeInUp" data-wow-delay="500ms">
                                        <div class="icon">
                                            <i class="fas fa-headphones-alt"></i>
                                        </div>
                                        <div class="info">
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
