import React from "react";
import { CardCollection } from "../CardCollection/CardCollection";
import { InvoicesOption } from "./InvoicesOption/InvoicesOption";
import styled from "styled-components";
import { AllInvoicesStyle } from "./AllInvoices.style";


export const AllInvoices = () =>{

    return (
        <AllInvoicesStyle>
            <InvoicesOption/>
            <CardCollection/>
        </AllInvoicesStyle>
    );
}