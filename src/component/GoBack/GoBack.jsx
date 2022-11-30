import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    content:{
        height:'10vh',
        width:'90vw',
        display:'flex',
        alignItems:'center',
        color: '#F8F8FB',
    },
    section:{
        width:'30%',
        display:'flex',
        alignItems:'center',
        gap:'1.5rem'
    },
    container:{
        width:'7%',
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        maxWidth:'10px',
        width:'100%',
        height:'auto',
    },
    text:{
        cursor:'pointer',
        fontSize:'.7rem',
        fontWeight:'600',
    },
    '@media (min-width:640px)':{
        section:{
            width:'20%',
        },
        text:{
            fontSize:'1rem',
        },
    }
});
export const GoBack = () =>{
    const style = useStyle();
    return (
        <div className={style.content}>
            <div className={style.section}>
                <div className={style.container}>
                    <img className={style.image} src="../public/icon-arrow-left.svg" alt="back" />
                </div>
                <p className={style.text}>Go Back</p>
            </div>
        </div>
    );
}