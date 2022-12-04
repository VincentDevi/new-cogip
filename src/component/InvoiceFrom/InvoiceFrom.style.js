import styled from "styled-components";

export const InvoiceFromStyle = styled.div`
    width:90%;
    height: 20%;
    margin-top:1rem;
    display:flex;
    flex-direction:column;
    font-size: 11px;
    @media (min-width:640px){
        flex-direction:row;
        font-size:12px;
    }
`
export const InvoiceFromRefStyle = styled.div`
    width:50%;
    height:20%;
    display:flex;
    flex-direction:column;
    gap: .2rem;
    @media (min-width: 640px){
        height:80%;
        gap:1rem;
    }
`
export const InvoiceFromAddressStyle = styled.div`
    width:50%;
    height:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:.2rem;
`