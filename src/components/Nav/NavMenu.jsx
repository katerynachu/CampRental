import { NavLink } from 'react-router-dom';
import { NavList } from './NavMenu.styled';

export const NavMenu = () => {
    return (
        <nav>
            <NavList>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
                <li><NavLink to="/catalog">Catalog</NavLink></li>
            </NavList>
        </nav>
    );
};
