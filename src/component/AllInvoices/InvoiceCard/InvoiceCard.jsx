import React from "react";
import { createUseStyles } from "react-jss";
import { StatusButton } from "./StatusButton/StatusButton";

const useStyle = createUseStyles({
    main:{
        height:'134px',
        width:'90vw',
        backgroundColor: '#1E2139',
        borderRadius: '.7rem',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'#F8F8FB',
        fontSize:'.7rem',
        marginBottom:'1rem',
    },
    division:{
        width:'45%',
        height:'70%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    name:{
        fontSize:'.7rem',
        alignSelf:'flex-end',
    },
    ref:{
        alignSelf:'flex-start',
        fontWeight:'700',
    },
    element:{
        alignSelf:'flex-start',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        height:'50%',
        lineHeight:'1.2rem',
    },
    date:{
        fontWeight:'light',
        fontSize:'.6rem',
    },
    price:{
        fontWeight: '700',
    },
})

export const InvoiceCard = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <div className={style.division}>
                <p className={style.ref}>#RT3080</p>
                <div className={style.element}>
                    <p className={style.date}>Due 19 Aug 2021</p>
                    <p className={style.price}>€ 1,800.90</p>
                </div>
            </div>
            <div className={style.division}>
                <p className={style.name}>Jensen Huang</p>
                <StatusButton/>
            </div>
        </div>
    );
}