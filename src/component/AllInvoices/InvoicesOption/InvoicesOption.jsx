import React from "react";
import { Filter } from "./Filter/Filter";
import { InvoicesCount } from "./InvoicesCount/InvoiceCount";
import { NewButton } from "./NewButton/NewButton";
import styled from "styled-components";


const Div = styled.div`
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
`;
const Invoice = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const Buttons = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
`;

export const InvoicesOption = () =>{
    return (
        <Div >
            <Invoice>
                <InvoicesCount/>
            </Invoice>
            <Buttons>
                <Filter/>
                <NewButton/>
            </Buttons>
        </Div>
    );
}