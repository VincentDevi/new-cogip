import styled from "styled-components";

export const InvoiceFooterStyle = styled.div`
      footer:{
        height:10vh;
        width:100vw;
        background-color:#1E2139;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    @media (min-width:640px){
        footer{
            display:none;
        }
    }
`