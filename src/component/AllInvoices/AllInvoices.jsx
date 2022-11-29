import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    section:{
        width: '100vw',
        height: 'auto',
    },
});
export const AllInvoices = () =>{
    const style = useStyle();

    return (
        <div className={style.section}>

        </div>
    );
}