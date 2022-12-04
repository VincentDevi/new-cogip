import styled from "styled-components";

export const LightDarkToggleStyle = styled.div`
    width:25%;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (min-width:640px){
        width:15%;
    }
    @media (min-width: 1024px){
        width:4vw;
        height:50%;
    }
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        width:40%;
        @media (min-width: 640px){
            width:25%;
        }
        @media (min-width:1024px){
            width:35%;
        }
        img{
            max-width:30px;
            width:100%;
            height:auto;
        }
    }
 
`