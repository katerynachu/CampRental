import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const NavList = styled.ul`
    display: flex;
    gap:15px;
`

export const NavItem = styled(NavLink)`
font-size:21px;
color: black;

&.active{
color: #e44848;
}
`