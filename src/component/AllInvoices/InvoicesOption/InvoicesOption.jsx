import React from "react";
import { createUseStyles } from "react-jss";
import { Filter } from "./Filter/Filter";
import { InvoicesCount } from "./InvoicesCount/InvoiceCount";
import { NewButton } from "./NewButton/NewButton";

const useStyle= createUseStyles({
    section:{
        width: '80vw',
        height:'15vh',
        display:'flex',
        alignItems:'center',
        color:'#F8F8FB',
    },
    invoice:{
        width:'50%',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    button:{
        width:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    }
})
export const InvoicesOption = () =>{
    const style = useStyle();
    return (
        <div className={style.section}>
            <div className={style.invoice}>
                <InvoicesCount/>
            </div>
            <div className={style.button}>
                <Filter/>
                <NewButton/>
            </div>
        </div>
    );
}