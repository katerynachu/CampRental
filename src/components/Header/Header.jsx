import logo from '../../assets/images/camper-logo.svg'
import { NavMenu } from '../Nav/NavMenu'
import { HeaderWrapper } from './Header.styled'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <HeaderWrapper>
            <NavLink to="/"><img width={50} src={logo}></img></NavLink>
            <NavMenu />
        </HeaderWrapper >
    )
}
