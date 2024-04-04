import styled from 'styled-components';
import { colors } from '../../../theme'




export const LocationLabel = styled.label`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: rgba(16, 24, 40, 0.6);
    text-transform:capitalize;
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    gap:8px;
`
export const LocationSvg = styled.svg`
    position: absolute;
    left:18px;
    top:47px;
    stroke: rgba(16, 24, 40, 0.6);

`

export const LocationInput = styled.input`
    border:none;
    outline:none;
    border-radius: 10px;
    padding: 18px 18px 18px 44px;
    width: 360px;
    background: ${colors.inputs};
    transition: stroke .3s ease;
    &::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 125%;
        color: rgba(16, 24, 40, 0.6);
 }
    &:focus + ${LocationSvg}{
            stroke: ${colors.main};

    }
`

