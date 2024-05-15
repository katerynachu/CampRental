import img from '../../assets/images/error.png'
import { NotText, NotWrapper } from './NotFound.styled'

export const NotFound = ({ text }) => {
    return (
        <NotWrapper>
            <NotText>Sorry its not find campers {text}</NotText>

            <img width={300} src={img}></img>        </NotWrapper>
    )
}