import React from 'react'  
import './about.css'

const About = () => {
    return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>
        <div className='about_me'>
        <div className='about_imgs'>
        {/* <img src='{}'alt /> */}
        </div>
        </div>

        <div className='about_content'>
            <div className='about_cards'>
            <article className='about_card'>
            {/* <FaAward className='about_icons'></FaAward> */}
            <h5>Experience</h5>
            <small>3+ years</small>
            </article>

            <article className='about_card'>
            {/* <FaAward className='about_icons'></FaAward> */}
            <h5>Clients</h5>
            <small> 200+ people </small>
            </article>

            <article className='about_card'>
            {/* <FaAward className='about_icons'></FaAward> */}
            <h5>Projects</h5>
            <small>18 Completed</small>
            </article>
            </div>
            <p>
                lorem ipsum dolor sit amet, consectetur
                lorem ipsum dolor sit amet, consectetur
                lorem ipsum dolor sit amet, consectetur
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
        </section>    
    )
}

export default About