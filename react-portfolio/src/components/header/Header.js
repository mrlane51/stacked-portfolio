import React from 'react'
import './header.css'
import Resume from './Resume'
import HeaderSocials from './HeaderSocials'
import HeaderPhoto from '../../assets/black_sunflower.jpg'

const Header = () => {
    return (
    <div>
        <header>
            <div className='container header_container'>
                <h3>Hello I'm</h3>
                <h1>MrLane51</h1>
                <h3 className= 'text-light'>Full Stack Dev</h3>
                < Resume/>
                < HeaderSocials/>

                <div className='pic'>
                    <img src={HeaderPhoto} alt='pic' />
                </div>

            <a href ='#contact'> className='scroll_down'</a>

            </div>
        </header>
    </div>
    )
}

export default Header