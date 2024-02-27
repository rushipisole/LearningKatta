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
                    <input type="checkbox" id='nav_check' hidden />
                    <nav>
                        <div className="logo-brand">
                            <NavLink to='/'><img src="images/Magicflare logo.png"
                                style={{ height: "83px", width: "105px", marginLeft: "77px" }}
                            /></NavLink>
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/services">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dataProduct">Data & Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contentData">Content & Data</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/registration">Registration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">Login</NavLink>    
                            </li>


                        </ul>
                    </nav>
                    <label htmlFor="nav_check" className='humburger'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </div>
            </header>
        </>

    )
}