import styled from "styled-components";

export const StatusButtonStyle = styled.div`
    height:20px;
    width:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:.2rem;
    background-color:white;
    border-radius:.3rem;
    @media (min-width: 640px){
        align-self:center;
    }
    div{
        width:7px;
        height:7px;
        border-radius:5rem;
        background-color: #33D69F;
    }
    h3{
        color:#33D69F;
    }
`