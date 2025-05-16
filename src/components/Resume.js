import React from 'react'
import resume from '../data/resume'

export default function Resume() {
    function calculateAge(birthdayStr) {
        const birthday = new Date(birthdayStr); // e.g. "20 April, 1999"
        const today = new Date();
      
        let age = today.getFullYear() - birthday.getFullYear();
      
        const hasHadBirthday =
          today.getMonth() > birthday.getMonth() ||
          (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
      
        if (!hasHadBirthday) {
          age--;
        }
      
        return age;
    }
      

    return (
        <div id="resume" className="resume-area default-padding-top">
            <div className="shape-right-top-extra">
                <img src="/img/shape/14.png" alt="Shape" />
            </div>
            <div className="container">
                <div className="experience-content-box">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
        
                            <div className="nav nav-tabs text-center resume-tab-navs" id="nav-tab" role="tablist">
        
                                <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                    {resume.tag1} <strong>01</strong>
                                </button>
                                <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                    {resume.tag2} <strong>02</strong>
                                </button>
                                <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                    {resume.tag3} <strong>03</strong>
                                </button>
        
                            </div>
        
                            <div className="tab-content resume-tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="biography-table">
                                                <li>
                                                    <h5>Name</h5>
                                                    <p>
                                                        {resume.biography.name}
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>Birthday</h5>
                                                    <p>
                                                        {resume.biography.birthday}
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>Age</h5>
                                                    <p>
                                                        {calculateAge(resume.biography.birthday)}
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>Address</h5>
                                                    <p>
                                                        {resume.biography.address}
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>Email</h5>
                                                    <p>
                                                        {resume.biography.email}
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>Phone</h5>
                                                    <p>
                                                        {resume.biography.phone}
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>Skype</h5>
                                                    <p>
                                                        {resume.biography.skype}
                                                    </p>
                                                </li>
                                                <li>
                                                    <h5>Freelance</h5>
                                                    <p>
                                                        {resume.biography.freelance === true ? "Available" : "Unavailable"}
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                    <div className="row align-center">
                                        <div className="col-lg-12">
                                            <ul className="skill-table">
                                                {
                                                    resume.skills.map((skill, id) => (
                                                        <li key={id}>
                                                            <div className="row align-center">
                                                                <div className="col-lg-2">
                                                                    <div className="icon">
                                                                        <i className={skill.icon}></i>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-5">
                                                                    <h4>{skill.title}</h4>
                                                                </div>
                                                                <div className="col-lg-5">
                                                                    <div className="progress-box">
                                                                        <h5>{skill.percentage}%</h5>
                                                                        <div className="progress">
                                                                            <div className="progress-bar" role="progressbar" data-width={skill.percentage}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="education-table">
                                                {
                                                    resume.education.map((item, id) => (
                                                        <li key={id}>
                                                            <h4>{item.title}</h4>
                                                            <h5>{item.school}</h5>
                                                            <span>{item.date}</span>
                                                            <p>
                                                                {item.desc}
                                                            </p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
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
