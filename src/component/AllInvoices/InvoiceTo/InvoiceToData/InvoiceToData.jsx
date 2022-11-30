import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        height: '48%',
        width: '50%',
        display:'flex',
        flexDirection:'column',
        fontSize:'.7rem',
        gap:'1rem'
    },
    title:{
        
    },
    date:{
        fontSize:'.8rem',
        fontWeight:'900'
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