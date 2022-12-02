import React from "react";
import { InvoiceCard } from "../AllInvoices/InvoiceCard/InvoiceCard";
import { useGetAllInvoicesQuery } from "../../features/apiSlice";
import { Link } from "react-router-dom";

export const CardCollection = () =>{
    const {data} = useGetAllInvoicesQuery();
    return (
        <>
        {data&&data.invoices.map((item,index)=>{
            return <Link> <InvoiceCard data={item} key={index}/> </Link>
        })}
        </>
    );
}