import styled from "styled-components";

export const InvoiceDataStyle = styled.div`
    width:100vw;
    height:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    section{
        background-color:${props=>(props.mode)? '#1E2139':'#FFFFFF'};
        width:90vw;
        height:80vh;
        max-height:695px;
        border-radius:.4rem;
        margin-bottom:3rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:1rem;
        @media (min-width: 1024px){
            width:50vw
        }
    }
`