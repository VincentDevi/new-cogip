import styled from "styled-components";

export const InvoiceToStyle = styled.div`
    height: 40%;
    width:90%;
    @media (min-width:640px){
        height:25%;
        display:flex;
    }
    
`
export const InvoiceToBillTo = styled.div`
    height:100%;
    width:50%;
    display:flex;
    flex-direction:column;
    gap:1rem;
    article{
        display:flex;
        flex-direction:column;
        gap:.5rem
    }
`