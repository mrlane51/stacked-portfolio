import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='about' element={ <About /> } />
        <Route path='projects' element={ <Projects /> } />
        <Route path='contact' element={ <Contact /> } />
        <Route path='services' element={ <Services /> } />
    <Route/>
    </Routes>
</BrowserRouter>,
document.querySelector('#root')
);