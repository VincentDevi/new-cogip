import React from "react";
import { createUseStyles } from "react-jss";
import { InvoicesOption } from "./InvoicesOption/InvoicesOption";
import { NoInvoice } from "./NoInvoice/NoInvoice";

const useStyle = createUseStyles({
    section:{
        width: '100vw',
        height: 'auto',
        backgroundColor:'#141625',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
});
export const AllInvoices = () =>{
    const style = useStyle();

    return (
        <div className={style.section}>
            <InvoicesOption/>
            {/* <NoInvoice/> */}
        </div>
    );
}