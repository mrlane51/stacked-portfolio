import React from "react";
import "./about.css";
import Header from "../header/Header"
import Nav from '../nav/Nav'
import { FaAward } from "react-icons/fa";
import Photo from "../../assets/pink-lopezz.JPG";

const About = () => {
    return (
        <section id="about">
            <Header />
            <Nav />
            <h2>About Me</h2>

            <div className="container about">
                <div className="about_me">
                    <div className="about_me-img">
                        <img src={Photo} alt="img" />
                    </div>
                </div>

                <div className="content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icons"></FaAward>
                            <h5>Experience</h5>
                            <small>3+ years</small>
                        </article>

                        <article className="about_card">
                            <FaAward className="about_icons"></FaAward>
                            <h5>Experience</h5>
                            <small>3+ years</small>
                        </article>

                        <article className="about_card">
                            <FaAward className="about_icons"></FaAward>
                            <h5>Experience</h5>
                            <small>3+ years</small>
                        </article>
                    </div>
                    <p>
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;