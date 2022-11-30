import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer', 
        width:'40%',
    },
    image:{ 
        maxWidth:'30px',
        width:'100%',
        height:'auto',
    },
    '@media(min-width:640px)':{
        container:{
            width:'25%',
        },
    },
    '@media (min-width:1024px)':{
        container:{
            width:'35%',
        },
    },
})
export const LightDarkToggle = () =>{
    const style = useStyle();

    return (
        <div className={style.container}>
            <img className={style.image} src="public/icon-sun.svg" alt="light" />
        </div>
    );
}