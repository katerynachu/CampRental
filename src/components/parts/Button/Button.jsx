import { RedButton, WhiteButton } from "./Button.styled"

export const ButtonItem = ({ text, type, style, onLoadMore, }) => {
    const ButtonComponent = style === 'white' ? WhiteButton : RedButton;


    return (
        <ButtonComponent onClick={onLoadMore} type={type}>{text}</ButtonComponent>
    );
}
