import React from "react";
import { createUseStyles } from "react-jss";
import { StatusButton } from "../AllInvoices/InvoiceCard/StatusButton/StatusButton";
import { CudButton } from "../CudButton/CudButton";

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
        fontSize:'1rem',
        color:'#858BB2',
    },
    cud:{
        display:'none',
    },
    '@media (min-width: 640px)':{
        main:{
            
        },
        section:{
            width:'40%',
            justifyContent:'flex-start',
            gap:'1.5rem',
        },
        cud:{
            width:'50%',
            display:'flex',
        }
    },
    '@media (min-width: 1024px)':{
        content:{
            width:'50vw',
        }
    }
});

export const InvoiceStatus = () =>{
    const style = useStyle();

    return (
        <div className={style.content}>
            <div className={style.section}>
                <p className={style.text}>status</p>
                <StatusButton/>
            </div>
            <div className={style.cud}>
                <CudButton/>
            </div>
    </div>
    );
}


