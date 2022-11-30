import React from "react";
import { createUseStyles } from "react-jss";
import { InvoiceCard } from "../AllInvoices/InvoiceCard/InvoiceCard";

export const CardCollection = () =>{
    const array=[1,2,3,4,5,6,7,8,9,10];
    return (
        <>
        {array.map((index,item)=>{
            return <InvoiceCard/>
        })}
        </>
    );
}