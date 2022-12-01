import React from "react";
import { createUseStyles } from "react-jss";
import { InvoiceToData } from "./InvoiceToData/InvoiceToData";

const useStyle = createUseStyles({
    main:{
        height:'40%',
        width: '90%',
        fontSize:'12px',
    },
    data:{
        height:'60%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',

    },
    emailDiv:{
        height:'40%',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        gap:'.5rem',
    },
    important:{
        fontSize:'15px',
        fontWeight:'700'
    },
    title:{
        fontSize:'12px',
    },
    to:{
        height:'100%',
        width:'50%',
        display:'flex',
        flexDirection:'column',
        gap:'1rem'
    },
    address:{
        display:'flex',
        flexDirection:'column',
        gap:'.3rem'
    },
    person:{
        display:'flex',
        flexDirection:'column',
        gap:'.5rem'
    },
    '@media (min-width: 640px)':{
        main:{
            height:'25%',
            display:'flex',
        },
        emailDiv:{
            width:'50%',
        },
    },
});
export const InvoiceTo = () =>{
    const style = useStyle();
    const dataArray = [
        ["invoice date", "21 aug 2021"],
        ["due date", "20 sep 2021"],
    ];
    return (
        <div className={style.main}>
            <div className={style.data}>
                {dataArray.map((item,index)=>{
                    return <InvoiceToData key={index} title={item[0]} date={item[1]}/>
                })}
                <div className={style.to}>
                   <div className={style.person}>
                        <p className={style.title}>bill to</p>
                        <p className={style.important}>Alex grim</p>
                   </div>
                    <div className={style.address}>
                        <p>84 Church way</p>
                        <p>Bradford</p>
                        <p>BD19PB</p>
                        <p>United Kingdom</p>
                    </div>
                </div>
            </div>
            <div className={style.emailDiv}>
                <p className={style.title}>sent to</p>
                <p className={style.important}>alexgrim@gmail.com</p>
            </div>
        </div>
    );
}

