import styled from "styled-components";

export const ProfilStyle = styled.div`
    width:30%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-left: 2px solid #494E6E;
    @media (min-width:640px){
        width:20%;
    }
    @media (min-width:1024px){
        width:4vw;
        height:50%;
        border-top: 2px solid #494E6E;
        border-left:none;
    }
    div{
        width:50%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        @media (min-width:640px){
            width:35%;
        }
        @media (min-width: 1024px){
            width:50%
        }
        img{
            max-width:40px;
            width:100%;
            height:auto;
            border-radius:5rem;
        }
    }
`