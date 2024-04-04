import styled from "styled-components";




export const CamperWrapper = styled.div`
    display: flex;
    gap:24px;
    align-items:center;
    padding: 24px;
    border-radius:20px;
    border: 1px solid rgba(16, 24, 40, 0.2);



`
export const ContentFlex = styled.div`
    display: flex;
    flex-direction:column;
    gap:24px;
    max-width:525px;


`
export const CamperDescription = styled.p`
            white-space: nowrap;
            max-width:525px;
            overflow: hidden;
            text-overflow: ellipsis;
            `
export const CategoriesWrapp = styled.ul`
        display: flex;
        flex-wrap:wrap;
        gap:8px;
`

export const ImageWrapper = styled.div`
width: 290px;
height: 310px;

`

export const CamperImage = styled.img`
width: 290px;
height: 310px;
object-fit: cover;
border-radius: 10px;


`
