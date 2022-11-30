import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    section:{
        width:'5O%',
        display:'flex',
        justifyContent:'space-evenly',
        gap:'.5rem',
    },
    text:{
        fontSize:'.7rem',
        cursor:'pointer',
    },
    container:{
        cursor:'pointer',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{},
    '@media (min-width:640px)':{
        text:{
            fontSize:'1.2rem',
        },
        image:{
            width:'20px',
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