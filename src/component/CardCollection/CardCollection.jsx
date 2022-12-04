import React from "react";
import { InvoiceCard } from "../AllInvoices/InvoiceCard/InvoiceCard";
import { useGetAllInvoicesQuery } from "../../features/apiSlice";
import { Link } from "react-router-dom";
import { CardCollectionStyle } from "./CardCollection.style";

export const CardCollection = () =>{
    const {data} = useGetAllInvoicesQuery();
    return (
        <CardCollectionStyle>
            {data&&data.invoices.map((item,index)=>{
                return  <Link key={index}>
                            <InvoiceCard data={item}/>
                        </Link>
            })}
        </CardCollectionStyle>
    );
}