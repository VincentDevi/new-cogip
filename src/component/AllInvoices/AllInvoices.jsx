import React from "react";
import { createUseStyles } from "react-jss";
import { InvoicesOption } from "./InvoicesOption/InvoicesOption";

const useStyle = createUseStyles({
    section:{
        width: '100vw',
        height: 'auto',
        backgroundColor:'#141625',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
});
export const AllInvoices = () =>{
    const style = useStyle();

    return (
        <div className={style.section}>
            <InvoicesOption/>

        </div>
    );
}