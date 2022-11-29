import React from "react";
import { AllInvoices } from "../component/AllInvoices/AllInvoices";
import { Header } from "../component/Header/Header";


export const InvoicePage = () =>{

    return (
        <>
            <Header/>
            <AllInvoices/>
        </>
    );
}