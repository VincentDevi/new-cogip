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
    mode:{
        width:'40%',
        height:'100%',
        display:'flex',
        justifyContent:'space-between',
    },
    logo:{
        backgroundColor:'#7C5DFA',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        width:'25%',
        borderTopRightRadius:'1rem',
        borderBottomRightRadius: '1rem'
    },
    image:{
        maxWidth: '40px',
        width: '30%',
        height: 'auto',
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
                <LightDarkToggle/>
                <Profil/>
            </div>

        </div>
    );
}