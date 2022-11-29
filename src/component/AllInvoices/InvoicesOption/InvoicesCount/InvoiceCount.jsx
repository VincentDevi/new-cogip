import React from "react";
import { createUseStyles } from "react-jss";

const useStyle= createUseStyles({
    section:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    text:{
        fontSize:'0.7rem',
    },
});
export const InvoicesCount = () =>{
    const style =useStyle();
    return (
        <div className={style.section}>
            <h2>Invoices</h2>
            <p className={style.text}>No invoice</p>
        </div>
    );
}