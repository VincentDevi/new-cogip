import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    section:{
        width:'10O%',
        display:'flex',
        gap:'.5rem',
    },
    text:{
        fontSize:'.7rem',
        cursor:'pointer',
        width:'50%',
    },
    container:{
        width:'50%',
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        maxWidth:'10px',
        width:'100%',
        height:'auto',
    },
    '@media (min-width:640px)':{
        section:{
        },
        text:{
            fontWeight:'700',
        },
        image:{
            width:'10px',
        },
    }
    
})
export const Filter = () =>{
    const style= useStyle();
    return (
        <div className={style.section}>
            <p className={style.text}>Filter</p>
            <div className={style.container}>
                <img className={style.image} src="public/icon-arrow-down.svg" alt="more" />
            </div>
        </div>
    );
}