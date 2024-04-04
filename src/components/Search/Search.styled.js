import styled from 'styled-components';
import { colors } from '../../theme'





export const FilterTitle = styled.p`
    ${'' /* font-family: var(--font-family); */}
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${colors.text};
    text-transform:capitalize;
`

export const CategorieName = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    color: ${colors.main};

    &:after{
        content: '';
        display: block;
        height: 1px;
        background: rgba(16, 24, 40, 0.1);
        margin-top: 24px;

    }
`

export const FilterWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    gap:10px;
    margin-bottom:32px; 
`