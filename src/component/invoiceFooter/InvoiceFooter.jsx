import React from "react";
import { createUseStyles } from "react-jss";
import { CudButton } from "../CudButton/CudButton";

const useStyle= createUseStyles({
    footer:{
        height:'10vh',
        width:'100vw',
        backgroundColor:'#1E2139',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    '@media (min-width:640px)':{
        footer:{
            display:'none',
        },
    },
});

export const InvoiceFooter = () =>{
    const style = useStyle();
    return (
        <div className={style.footer}>
            <CudButton/>
        </div>
    );
}