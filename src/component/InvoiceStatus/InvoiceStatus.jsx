import React from "react";
import { createUseStyles } from "react-jss";
import { StatusButton } from "../AllInvoices/InvoiceCard/StatusButton/StatusButton";

const useStyle= createUseStyles({
    content:{
        height:'10vh',
        width:'90vw',
        backgroundColor:'#1E2139',
        borderRadius:'.4rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'1rem',
    },
    section:{
        width:'80%',
        height:'90%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    text:{
        fontSize:'.7rem',
        color:'#F8F8FB',
    },
});

export const InvoiceStatus = () =>{
    const style = useStyle();
    return (
        <div className={style.content}>
            <div className={style.section}>
                <p className={style.text}>status</p>
                <StatusButton/>
            </div>
        </div>
    );
}