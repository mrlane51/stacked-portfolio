import React from 'react'
import './nav.css'
import { GiMushroomHouse, GiPerson, GiEvilBook, GiSecretBook, Gi3DHammer, GiConversation } from 'react-icons/gi';

const Nav = () => {
    return (
        <nav>
        <a href='#'><GiMushroomHouse size={'25px'}/></a>
        <a href='#about'><GiPerson size={'25px'}/></a>
        <a href='#experience'><GiEvilBook size={'25px'}/></a>
        <a href='#experienceee'><GiSecretBook size={'25px'}/></a>
        <a href='#services'><Gi3DHammer size={'25px'}/></a>
        <a href='#contact'><GiConversation size={'25px'}/></a>
        </nav>
    )
}

export default Nav