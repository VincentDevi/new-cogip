import React from "react";
import { GoBack } from "../GoBack/GoBack";
import { InvoiceStatus } from "../InvoiceStatus/InvoiceStatus";
import { InvoiceFrom } from "../InvoiceFrom/InvoiceFrom";
import { InvoiceTo } from "../AllInvoices/InvoiceTo/InvoiceTo";
import { InvoiceFooter } from "../invoiceFooter/InvoiceFooter";
import { TotalAmount } from "../TotalAmount/TotalAmount";
import { useSelector } from "react-redux";
import { InvoiceDataStyle } from "./InvoiceData.style";


export const InvoiceData = () =>{
    const mode = useSelector(state=>state.darkMode.value)
    return (
        <InvoiceDataStyle mode={mode}>
                <GoBack/>
                <InvoiceStatus/>

                <section>
                    <InvoiceFrom/>
                    <InvoiceTo/>
                    <TotalAmount/>
                </section>

                <InvoiceFooter/>
        </InvoiceDataStyle>
    );
}