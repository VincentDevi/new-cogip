import React from "react";
import { createUseStyles } from "react-jss";
import { Header } from "../component/Header/Header";
import { InvoiceData } from "../component/InvoiceData/InvoiceData";

const useStyle = createUseStyles({
    main:{
        display: 'flex',
        flexDirection:'column',
    },
    '@media (min-width:1024px)':{
        flexDirection:'row',
    },
});

export const InvoiceDataPage = () =>{
    const style = useStyle();

    return (
        <div className={style.main}>
            <Header/>
            <InvoiceData/>
        </div>
    );
}