import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    button:{
        alignSelf:'flex-end',
        height:'40%',
        width:'80%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'.2rem',
        backgroundColor:'white',
        borderRadius:'.3rem',
    },
    circle:{
        width:'7px',
        height:'7px',
        borderRadius:'5rem',
        backgroundColor: '#33D69F',
    },
    text:{
        color:'#33D69F',
        fontWeight:'900',
        fontSize:'.7rem',
    },
});

export const StatusButton = () =>{
    const style = useStyle();
    return (
        <div className={style.button}>
            <div className={style.circle}></div>
            <p className={style.text}>Paid</p>
        </div>
    );
}