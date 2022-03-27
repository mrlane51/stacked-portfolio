import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <>
            <section id='services'>
                <h2>Services: </h2>

                <div className="container">
                    {/* UI/UX Design */}
                    <article className="service">
                        <div className="serviceHeader">
                            <h3>UI/UX Design</h3>
                        </div>

                        <ul className="list">
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                        </ul>
                    </article>
                    {/* web-dev column */}
                    <article className="service">
                        <div className="serviceHeader">
                            <h3>Web Development</h3>
                        </div>

                        <ul className="list">
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                        </ul>
                    </article>
                    {/* Content Creation */}

                    <article className="service">
                        <div className="serviceHeader">
                            <h3>Content Creation</h3>
                        </div>

                        <ul className="list">
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                            <li>
                                <BiCheck className="list-icon" />
                                <p>lorem ipsum dolor sit amet, consectetur adip.</p>
                            </li>
                        </ul>
                    </article>
                </div>
        </section>
        </>
    )
}

export default Services