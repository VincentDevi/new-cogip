import React from "react";
import { Button } from "../Button/Button";
import styled from "styled-components";


const Div = styled.div`
    width:90%;
    height: 90%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:.5rem;
    color: #F8F8FB;
    font-weight: 700;
    font-size: 12px;
    @media (min-width: 640px){
        width: 100%;
        justify-content: flex-end;
    }
`;


export const CudButton = () =>{
    const typeArray = ['edit','delete','mark as paid'];
    return(
        <Div>
            {typeArray.map((item,index)=>{
                return <Button key={index} type={item}/>
            })}
        </Div>
    );
}