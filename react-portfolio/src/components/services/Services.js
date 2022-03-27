import React from 'react'
import './services.css'
import Nav from '../nav/Nav'
import { BsPatchCheckFill } from 'react-icons/bs'

const Services = () => {
    return (
    <>
    <Nav />
    <section id='services'>
        <h5> Experience Services </h5>
        <h3> My Experience </h3>

        <div className='container experience_container'>
            <div className='experience_frontend'>
                <h3> FrontEnd Development </h3>
                <div className='experience_content'></div>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>HTML5</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>CSS3</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>JavaScript</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>Bootstrap</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>REACT</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>EXAMPLE</h4>
                <small className='text_light'>Experienced</small>
                </article>
            </div>
            </div>
            <div className='experience_backend'>
            <div className='container experience_container'>
            <div className='experience_frontend'>
                <h3> BackEnd Development </h3>
                <div className='experience_content'></div>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>NODE JS</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>MongoDB</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>MYSQL</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>Express</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>Python</h4>
                <small className='text_light'>Experienced</small>
                </article>
                <article className='experience_details'>
                <BsPatchCheckFill />
                <h4>REST APIs</h4>
                <small className='text_light'>Experienced</small>
                </article>
            </div>
            </div>
                
                </div>
    </section>
    </>
    )
}

export default Services