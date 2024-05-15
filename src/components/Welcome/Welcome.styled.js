import styled from "styled-components";
import picture from '../../assets/images/banner_couple.jpg'
import picturetwo from '../../assets/images/banner_couple2.jpg'
import picturethree from '../../assets/images/banner_couple3.jpg'

export const WelcomeWrapp = styled.div`
    display: grid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 20px;
    position: relative;
`

export const Banner = styled.div`
    background-image: url(${picture});
    height: 300px;
    border-radius: 8px;
    grid-column: 1 / 3;
    grid-row: 2;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
`
    background-image: url(${picturetwo});
    height: 300px;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: cover;
    grid-column: 1;
    grid-row: 1;
`
export const BannerThee = styled.div`
    background-image: url(${picturethree});
    height: 300px;
    border-radius: 8px;
    background-size: cover;
    background-position: top;
    grid-column: 2;
    grid-row: 1;
    background-repeat: no-repeat;

`
export const WelcomeTitle = styled.h1`
    position: absolute;
    color: #e44848; 
    text-shadow: 1px 1px 1px black;
    width: 75%;
    font-size: 46px;
    top: 39%;
    right: 5%;
`