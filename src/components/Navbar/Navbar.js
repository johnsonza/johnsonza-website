import React from 'react'
import { StyledNavbar, StyledNavLink, HomeButton, ContactButton, MiddleButton } from './Navbar.styled'

const Navbar = () => {
    return (
        <StyledNavbar>
            <HomeButton to="/">
                <h1>Zachary Johnson</h1>
            </HomeButton>
            <StyledNavLink to="/About">
                <MiddleButton>About</MiddleButton>
            </StyledNavLink>
            <StyledNavLink to="/Portfolio">
                <MiddleButton>Portfolio</MiddleButton>
            </StyledNavLink>
            <StyledNavLink to="/Resume">
                <MiddleButton>Resume</MiddleButton>
            </StyledNavLink>
            <StyledNavLink to="/Contact">
                <ContactButton>Contact</ContactButton>
            </StyledNavLink>
        </StyledNavbar>
    );
};

export default Navbar