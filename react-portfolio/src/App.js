// import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import { Outlet, Link } from 'react-router-dom'

export default function App() {
    return (
        <div>
            <h1>Welcome Home</h1>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
            <Outlet />
        </div>
    )
}