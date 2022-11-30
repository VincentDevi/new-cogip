import React from "react";
import { GoBack } from "../GoBack/GoBack";
import { createUseStyles } from "react-jss";
import { InvoiceStatus } from "../InvoiceStatus/InvoiceStatus";
import { InvoiceFrom } from "../InvoiceFrom/InvoiceFrom";
import { InvoiceTo } from "../AllInvoices/InvoiceTo/InvoiceTo";
import { InvoiceFooter } from "../invoiceFooter/InvoiceFooter";
import { TotalAmount } from "../TotalAmount/TotalAmount";


const useStyle = createUseStyles({
    main:{
        width:'100vw',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        color:'#F8F8FB',
    },
    invoice:{
        backgroundColor:'#1E2139',
        width:'90vw',
        height:'80vh',
        borderRadius:'.4rem',
        marginBottom:'3rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'1rem',
    }
});
export const InvoiceData = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <GoBack/>
            <InvoiceStatus/>
            <div className={style.invoice}>
                <InvoiceFrom/>
                <InvoiceTo/>
                <TotalAmount/>
            </div>
            <InvoiceFooter/>
        </div>
    );
}