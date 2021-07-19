import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand">useContext</Link>

            <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">


                    <NavLink
                        exact
                        activeClassName="active"
                        to="/"
                        className="nav-link"
                    >
                        Home
                    </NavLink>



                    <NavLink
                        exact
                        activeClassName="active"
                        to="/about"
                        className="nav-link"
                    >
                        About
                    </NavLink>

                    <NavLink
                        exact
                        activeClassName="active"
                        to="/login"
                        className="nav-link"
                    >
                        Login
                    </NavLink>


                </ul>
            </div>
        </nav>

    )
}
