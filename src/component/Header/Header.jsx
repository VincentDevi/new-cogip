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
            height:'100%',
        },
        prof:{
            width:'20%',
        },
        toggle:{
            width:'15%',
        },
    },
    '@media (min-width:1024px)':{
        header:{
            position:'fixed',
            flexDirection:'column',
            height:'100vh',
            width:'5vw',
        },
        logo:{
            width:'100%',
            height:'10%',
        },
        mode:{
            height:'20%',
            flexDirection:'column',
        },
        toggle:{
            width:'5vw',
            height:'50%',
        },
        prof:{
            width:'5vw',
            height:'50%',
            borderTop: '2px solid #494E6E',
            borderLeft:'none',
        },
    }
}) 

export const Header = () =>{
    const style =useStyle();
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img className={style.image} src="../public/logo.svg" alt="logo" />
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