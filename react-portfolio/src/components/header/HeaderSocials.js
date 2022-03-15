import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className="headerSocials">
            <a href="https://www.linkedin.com/in/lane-lopez-515a67104/" target='_blank'><FaLinkedin/></a>
            <a href="https://github.com/mrlane51" target='_blank'><FaGithub/></a>
            <a href="https://www.instagram.com/mrlane51/" target='_blank'><FaInstagram/></a>
        </div>
    )
}

export default HeaderSocials