import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container:{
        width:'50%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
    },
    image:{
        maxWidth:'40px',
        width: '100%',
        height:'auto',
        borderRadius:'5rem',
    },
    '@media(min-width:640px)':{
        container:{
            width:'35%',
        },
    },
    '@media (min-width:1024px)':{
        container:{
            width:'50%',
        },
    },
})

export const Profil = () =>{

    const style = useStyle();

    return (
        <div className={style.container}>
            <img className={style.image} src="../public/image-avatar.jpg" alt="profil" />
        </div>
    );
}