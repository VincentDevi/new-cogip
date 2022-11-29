import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        height:'100%',
        width: '90vw',
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        gap:'2rem',
        color:'#F8F8FB',
    },
    container:{

    },
    image:{

    },
    title:{
        fontWeight: '800',
        fontSize: '1.2rem',
    },
    text:{
        fontSize :'.9rem',
        textAlign:'center',
        lineHeight: '1.2rem',
    },
    new:{
        fontWeight:'800',
    }
});

export const NoInvoice = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <div className={style.container}>
                <img className={style.image} src="public/illustration-empty.svg" alt="No invoice" />
            </div>
            <p className={style.title}>There is nothing here</p>
            <p className={style.text}>Create an invoice by clicking the <span className={style.new}>New</span> button and get started </p>
        </div>
    );
}