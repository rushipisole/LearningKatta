import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'


export default function Navbar() {
    return (

        <>
            <header>
                <div className="container" style={{ alignItems: 'center', padding: "11px" }}>
                    <div className="logo-brand">
                        <NavLink to='/'><img src="images/Magicflare logo.png"
                            style={{ height: "83px", width: "105px", marginLeft: "77px" }}
                        /></NavLink>
                    </div>
                    <nav>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/dataProduct">Data & Product</NavLink>
                            <NavLink to="/contentData">Content & Data</NavLink>
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