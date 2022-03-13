import React from 'react'
import './header.css'
import Resume from './Resume'

const Header = () => {
    return (
    <div>
        <header>
            <div className='container header__container'>
                <h3>Hello I'm</h3>
                <h1>MrLane51</h1>
                <h3 className= 'text-light'>Full Stack Dev</h3>
                < Resume/>
            </div>
        </header>
    </div>
    )
}

export default Header