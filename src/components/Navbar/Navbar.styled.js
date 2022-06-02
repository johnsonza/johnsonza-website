import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const StyledNavbar = styled.nav`
    background-color: transparent;
    height: 100px;
    width: 100%;
    display: flex;
    padding: 0px;
    position: absolute;
    z-index: 10;
    align-items: center;
    justify-content: center;
`

export const StyledNavLink = styled(Link)`
    color: #fff;
    display: flex;
    text-decoration: none;
    height: 100%;
    width: 20%;
    cursor: pointer;

    &:hover {
        color: red;
    }

    &.active {
        color: #15cdfc;
    }
`

export const HomeButton = styled(StyledNavLink)`
    padding-left: 10px;
`

export const ContactButton = styled.h2`
    width: 100%;
    text-align: right;
    padding-right: 10px;
`

export const MiddleButton = styled.h2`
    width: 100%;
    text-align: center;
`