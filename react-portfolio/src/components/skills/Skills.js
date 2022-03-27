import React from 'react'
import './skills.css'
import Nav from '../nav/Nav'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <>
            <Nav />
            <section id='skills'>
                <h1> My Developer Skills: </h1>

                <div className='container exp'>
                    <div className='frontEnd'>
                        <h3> FrontEnd Development </h3>
                        <div className='content'>
                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>HTML5</h4>
                                <small className='text_light'>Experienced</small>
                            </article>

                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>CSS3</h4>
                                <small className='text_light'>Experienced</small>
                            </article>

                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>JavaScript</h4>
                                <small className='text_light'>Experienced</small>
                            </article>

                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>Bootstrap</h4>
                                <small className='text_light'>Experienced</small>
                            </article>

                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>REACT</h4>
                                <small className='text_light'>Experienced</small>
                            </article>

                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>EXAMPLE</h4>
                                <small className='text_light'>Experienced</small>
                            </article>
                        </div>
                    </div>

                    {/* Backend Container */}
                    <div className='backEnd'>
                        <h3> BackEnd Development </h3>
                        <div className='content'>
                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>NODE JS</h4>
                                <small className='text_light'>Experienced</small>
                            </article>
                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>MongoDB</h4>
                                <small className='text_light'>Experienced</small>
                            </article>
                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>MYSQL</h4>
                                <small className='text_light'>Experienced</small>
                            </article>
                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>Express</h4>
                                <small className='text_light'>Experienced</small>
                            </article>
                            <article className='info'>
                                <BsPatchCheckFill />
                                <h4>Python</h4>
                                <small className='text_light'>Experienced</small>
                            </article>
                            <article className='info'>
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

export default Skills