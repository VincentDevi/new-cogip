import React from "react";
import { createUseStyles } from "react-jss";
import { CardCollection } from "../CardCollection/CardCollection";
import { InvoicesOption } from "./InvoicesOption/InvoicesOption";
import { NoInvoice } from "./NoInvoice/NoInvoice";
import styled from "styled-components";

const Div = styled.div`
    width:100vw;
    height: auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const AllInvoices = () =>{

    return (
        <Div>
            <InvoicesOption/>
            {/* <NoInvoice/> */}
            <CardCollection/>
        </Div>
    );
}