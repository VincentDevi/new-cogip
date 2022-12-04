import React from "react";
import { CudButton } from "../CudButton/CudButton";
import { InvoiceFooterStyle } from "./InvoiceFooter.style";
import { useSelector } from "react-redux";



export const InvoiceFooter = () =>{
    const mode = useSelector((state)=>state.darkMode.value)
    return (
        <InvoiceFooterStyle mode={mode}>
            <CudButton/>
        </InvoiceFooterStyle>
    );
}