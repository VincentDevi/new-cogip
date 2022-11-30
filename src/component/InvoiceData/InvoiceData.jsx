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
    content:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    invoice:{
        backgroundColor:'#1E2139',
        width:'90vw',
        height:'80vh',
        maxHeight:'695px',
        borderRadius:'.4rem',
        marginBottom:'3rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'1rem',
    },
    '@media (min-width:1024px)':{
        main:{

        },
        content:{
        },
        invoice:{
            width:'50vw',
        }
    }
});
export const InvoiceData = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <div className={style.content}>
                <GoBack/>
                <InvoiceStatus/>
                <div className={style.invoice}>
                    <InvoiceFrom/>
                    <InvoiceTo/>
                    <TotalAmount/>
                </div>
                <InvoiceFooter/>
            </div>
        </div>
    );
}