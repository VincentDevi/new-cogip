import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        height: '48%',
        width: '50%',
        display:'flex',
        flexDirection:'column',
        gap:'1rem'
    },
    title:{
        fontSize:'12px',
    },
    date:{
        fontSize:'15px',
        fontWeight:'700'
    },
});

export const InvoiceToData = ({title,date}) =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <p className={style.title}>{title}</p>
            <p className={style.date}>{date}</p>
        </div>
    );
}