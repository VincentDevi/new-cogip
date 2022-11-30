import React from "react";
import { AllInvoices } from "../component/AllInvoices/AllInvoices";
import { Header } from "../component/Header/Header";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        display:'flex',
        flexDirection:'column'
    },
    '@media (min-width:1024px)':{
        main:{
            flexDirection:'row',
        },
    }
});

export const InvoicePage = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <Header/>
            <AllInvoices/>
        </div>
    );
}