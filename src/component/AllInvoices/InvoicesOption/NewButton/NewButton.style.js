import styled from "styled-components";

export const NewButtonStyle = styled.div`
    width:50%;
    height:30px;
    max-width:150px;
    background-color:#7C5DFA;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5rem;
    cursor:pointer;
    
    article{
        height:100%;
        width:40%;
        display:flex;
        align-items:center;
        div{
            background-color:#F8F8FB;
            border-radius: 5rem;
            width:80%;
            max-height:80%;
            aspect-ratio:1/1;
            display:flex;
            align-items:center;
            justify-content:center;
            img{
                width:55%;
            }
        }
    }
    @media (min-width:640px){
        height:40px;
        article{
            div{
                width:50%;
                max-height:80%;
                img{
                    width:40%
                }
            }
        }
    }
    h3{
        width:50%;
    }
`