import styled from "styled-components";

export const InvoiceFooterStyle = styled.div`
        height:10vh;
        width:100vw;
        background-color:${props=>(props.mode)? '#1E2139':'#FFFFFF'};
        display:flex;
        align-items:center;
        justify-content:center;
    @media (min-width:640px){
            display:none;
    }
`