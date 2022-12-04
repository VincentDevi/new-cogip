import styled from "styled-components";

export const LogoStyle = styled.div`
    background-color: #7C5DFA;
    display:flex;
    justify-content:center;
    align-items: center;
    width:20%;
    border-top-right-radius:1rem;
    border-bottom-right-radius: 1rem;
    @media (min-width: 640px){
        width:10%;
        height: 100%
    }
    @media (min-width:1024px){
        width:100%;
        height:7%
    }
    image{
        max-width:40px;
        width:30%;
        height:auto
    }
`