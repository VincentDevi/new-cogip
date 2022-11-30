import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        height:'70vh',
        width: '90vw',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        gap:'2rem',
        color:'#F8F8FB',
    },
    section:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        gap:'2rem'
    },
    container:{

    },
    image:{

    },
    para:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:'1rem',
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
    },
    '@media (min-width:1024px)':{

    }
});

export const NoInvoice = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <div className={style.section}>
                <div className={style.container}>
                    <img className={style.image} src="public/illustration-empty.svg" alt="No invoice" />
                </div>
                    <div className={style.para}>
                        <p className={style.title}>There is nothing here</p>
                        <p className={style.text}>Create an invoice by clicking the <span className={style.new}>New</span> button and get started </p>
                    </div>
                </div>
        </div>
    );
}