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
    title:{
        fontWeight:'900',
    },
    '@media (min-width:640px)':{
        text:{
        },
        title:{
            fontSize:'1.5rem',
        }
    }
});
export const InvoicesCount = () =>{
    const style =useStyle();
    return (
        <div className={style.section}>
            <h2 className={style.title}>Invoices</h2>
            <p className={style.text}>7 invoices</p>
        </div>
    );
}