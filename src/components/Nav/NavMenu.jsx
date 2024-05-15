import { NavItem, NavList } from './NavMenu.styled';

export const NavMenu = () => {
    return (
        <nav>
            <NavList>
                <li><NavItem to="/">Home</NavItem></li>
                <li><NavItem to="/favorites">Favorites</NavItem></li>
                <li><NavItem to="/catalog">Catalog</NavItem></li>
            </NavList>
        </nav>
    );
};
