import styled from 'styled-components';


export const RadioLabel = styled.label`
cursor: pointer;
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 10px;
    padding: 17px 18px;
    min-width: 100px;
    ${'' /* min-height: 95px; */}
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:8px;

`

export const RadioInput = styled.input`
    display: none;
    
    &:checked + ${RadioLabel} {
        border: 1px solid red;  }

      &:not(:checked) + ${RadioLabel} {
        border: 1px solid rgba(16, 24, 40, 0.2);
    }
`;