import logo from '../../assets/images/camper-logo.svg'
import { NavMenu } from '../Nav/NavMenu'
import { HeaderWrapper } from './Header.styled'
export const Header = () => {
    return (
        <HeaderWrapper>
            <img width={50} src={logo}></img>
            <NavMenu />
        </HeaderWrapper>
    )
}
