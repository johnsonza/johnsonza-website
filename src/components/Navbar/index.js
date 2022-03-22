import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Zachary Johnson</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activestyle='true'>
                        About
                    </NavLink>
                    <NavLink to="/portfolio" activestyle='true'>
                        Portfolio
                    </NavLink>
                    <NavLink to="/resume" activestyle='true'>
                        Resume
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact">
                        Contact
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar