import React from 'react'
import data from '../data/about'

export default function About() {
  return (
    <div id="about" class="about-style-six-area default-padding-top">
        <div class="container">
            <div class="row align-center">
                <div class="about-style-six col-lg-5">
                    <div class="thumb">
                        <img class="wow fadeInUp" src="/img/illustration/3.png" alt="Thumb" />
                    </div>
                </div>
                <div class="about-style-six col-lg-6 offset-lg-1">
                    <h4 class="sub-title">{data.subTitle}</h4>
                    <h2 class="title">{data.title}</h2>
                    <p>
                        {data.desc}
                    </p>
                    <div class="skill-list">
                        <ul>
                            {
                                data.skills.map((item, id) => (
                                    <li key={id}>
                                        <div class="icon">
                                            <i class={item.icon}></i>
                                        </div>
                                        <div class="content">
                                            <h4>{item.title}</h4>
                                            <span>{item.desc}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
