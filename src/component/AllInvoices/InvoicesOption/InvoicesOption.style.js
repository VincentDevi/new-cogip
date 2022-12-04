import styled from "styled-components";

export const InvoicesOptionStyle = styled.div`
    width:80vw;
    height: 15vh;
    display: flex;
    align-items: center;
    @media (min-width: 640px){
        width: 90vw;
    }
    @media (min-width: 1024px){
        width: 45vw;
    }
    section{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }
`