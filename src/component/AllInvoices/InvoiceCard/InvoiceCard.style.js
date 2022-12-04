import styled from "styled-components";

export const InvoiceCardStyle = styled.div`
    height:134px;
    width:80vw;
    background-color: ${props=>(props.mode)?'#1E2139':'#FFFFFF'};
    border-radius: .7rem;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    
    section{
        height:90%;
        width:90%;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        article{
            height:50%;
            width:50%;
            display:flex;
            align-items:center;
            justify-content:flex-end;
        }
    }
    @media (min-width: 640px){
        height:72px;
        width:90vw;

        section{
            flex-direction: row;
            article{
                width:20%;
                order:4;
            }
            & > *{
                width:20%;
            }
           
        }
    }
    @media (min-width: 1024px){
        width:45vw;
    }
  
 
`