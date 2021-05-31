import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return(
        <nav>
            <Link to="/" className="logo">TO DO LIST</Link>
            <ul className="navbar">
                <li className= "nav-item">
                    <Link to="/countries">Paises</Link>
                </li>
                <li className= "nav-item">
                    <Link to="/cities">Cuidades</Link>
                </li>
                <li className= "nav-item">
                    <Link to="/companies">Empresas</Link>
                </li>
            </ul>
        </nav>
    )
}