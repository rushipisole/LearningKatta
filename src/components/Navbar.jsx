import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'


export default function Navbar() {
    return (

        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to='/'>MagicFlare</NavLink>
                    </div>
                    <nav>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/blog">Blogs</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <NavLink to="/registration">Registration</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
        </>

    )
}