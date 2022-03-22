import React from 'react'
import './nav.css'
import { GiMushroomHouse, GiPerson, GiSecretBook, Gi3DHammer, GiConversation } from 'react-icons/gi';

// evilbook logo option for projects page { GiEvilBook }
// <a href='/projects'><GiEvilBook size={'25px'}/></a>

const Nav = () => {
    return (
        <nav>
        <a href='/'><GiMushroomHouse size={'25px'}/></a>
        <a href='/about'><GiPerson size={'25px'}/></a>
        <a href='/projects'><GiSecretBook size={'25px'}/></a>
        <a href='/services'><Gi3DHammer size={'25px'}/></a>
        <a href='/contact'><GiConversation size={'25px'}/></a>
        </nav>
    )
}

// const Nav = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//             <Route path='about' element= { <About /> } />
//             {/* <Route path='about' element= { <About /> }><GiMushroomHouse size={'25px'} /> */}
//             {/* <a href='#about'><GiPerson size={'25px'}/></a>
//             <a href='#experience'><GiEvilBook size={'25px'}/></a>
//             <a href='#experienceee'><GiSecretBook size={'25px'}/></a>
//             <a href='#services'><Gi3DHammer size={'25px'}/></a>
//             <a href='#contact'><GiConversation size={'25px'}/></a> */}
//             </Routes>
//         </BrowserRouter>
//     )
// }

export default Nav