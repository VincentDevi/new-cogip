import React from "react";
import { createUseStyles } from "react-jss";
import { LightDarkToggle } from "./LigthDarkToggle/LightDarkToggle";
import { Profil } from "./Profil/Profil";

const useStyle = createUseStyles({
    header:{
        width:'100vw',
        height: '10vh',
        backgroundColor:'#1E2139',
        display: 'flex',
        justifyContent:'space-between'
    },

    logo:{
        backgroundColor:'#7C5DFA',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        width:'20%',
        borderTopRightRadius:'1rem',
        borderBottomRightRadius: '1rem'
    },
    image:{
        maxWidth: '40px',
        width: '30%',
        height: 'auto',
    },
    mode:{
        width:'75%',
        height:'100%',
        display:'flex',
        justifyContent:'flex-end',
    },
    toggle:{
        width:'25%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    prof:{
        width:'30%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderLeft: '2px solid #494E6E'
    },
    '@media(min-width:640px)':{
        logo:{
            width:'10%',
        },
        prof:{
            width:'20%',
        },
        toggle:{
            width:'15%',
        },
    }
}) 

export const Header = () =>{
    const style =useStyle();
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img className={style.image} src="public/logo.svg" alt="logo" />
            </div>
            <div className={style.mode}>
                <div className={style.toggle}>
                    <LightDarkToggle/>
                </div>
                <div className={style.prof}>
                    <Profil/>
                </div>
            </div>

        </div>
    );
}