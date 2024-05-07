import styled from 'styled-components';


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);  
    transition: 0.3s;
`

export const ModalMainDiv = styled.div`
    position: fixed;
    top: 65%;
    left: 50%;
    width: 240px;
    height: 100%;
    padding: 0 16px;
    background: white;
    translate:-50% -50%;
    transition: 0.3s;
`