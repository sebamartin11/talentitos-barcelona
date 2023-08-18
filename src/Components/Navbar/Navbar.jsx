import React from 'react'
import './Navbar.css'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid divNavbar">
                <Logo/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/jugadores"}>Jugadores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/social"}>Social</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/nosotros"}>Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/servicios"}>Servicios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/contacto"}>Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/socios"}>Socios</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar