import React from "react";
import { GoBack } from "../GoBack/GoBack";
import { createUseStyles } from "react-jss";
import { InvoiceStatus } from "../InvoiceStatus/InvoiceStatus";
import { InvoiceFrom } from "../InvoiceFrom/InvoiceFrom";
import { InvoiceTo } from "../AllInvoices/InvoiceTo/InvoiceTo";
import { InvoiceFooter } from "../invoiceFooter/InvoiceFooter";
import { TotalAmount } from "../TotalAmount/TotalAmount";
import styled from "styled-components";
import { useSelector } from "react-redux";


const useStyle = createUseStyles({
    main:{
        width:'100vw',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    content:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    invoice:{
     
    },
});
const Invoice = styled.div`
    background-color:${props=>(props.mode)? '#1E2139':'#FFFFFF'};
    width:90vw;
    height:80vh;
    max-height:695px;
    border-radius:.4rem;
    margin-bottom:3rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
    @media (min-width: 1024px){
        width:50vw
    }
`
export const InvoiceData = () =>{
    const style = useStyle();
    const mode = useSelector(state=>state.darkMode.value)
    return (
        <div className={style.main}>
            <div className={style.content}>
                <GoBack/>
                <InvoiceStatus/>
                <Invoice mode={mode}>
                    <InvoiceFrom/>
                    <InvoiceTo/>
                    <TotalAmount/>
                </Invoice>
                <InvoiceFooter/>
            </div>
        </div>
    );
}