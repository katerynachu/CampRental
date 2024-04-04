import styled from "styled-components";
import { colors } from '../../../theme'


export const RedButton = styled.button`
    cursor: pointer;
    width: 166px;

    border: none;
    border-radius: 200px;
    padding: 16px 40px;
    background: ${colors.button};

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #fff;
        transition: background .5s linear;


    &:hover{
        background: #d84343;
    }
`
export const WhiteButton = styled.button`
    cursor: pointer;
    width: 166px;

    border: 1px solid rgba(71, 84, 103, 0.2);
    border-radius: 200px;
    padding: 16px 32px;
    background:transparent;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: ${colors.main};
    display: block;
    margin: 0 auto;
    transition: border .5s linear;
        &:hover{
            border: 1px solid ${colors.button};
    }
`