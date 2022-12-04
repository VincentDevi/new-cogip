import styled from "styled-components";

export const HeaderStyle = styled.header`
    width:100vw;
    height: 10vh;
    background-color:${props=> (props.mode)?'#1E2139':'#373B53'};
    display: flex;
    justify-content:space-between;
    section{
        width:75%;
        height:100%;
        display:flex;
        justify-content:flex-end;
    }
    @media (min-width: 1024px){
        position:fixed;
        flex-direction:column;
        height:100vh;
        width:4vw;
        section{
            height:20%;
            flex-direction:column;
        }
    }

`