import React from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { switchMode } from "../../../features/darkMode";
import { useSelector } from "react-redux";

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
    const dispatch = useDispatch()
    const mode = useSelector((state)=>state.darkMode.value)
    return (
        <div className={style.container} onClick={()=>{
            dispatch(switchMode())
        }}>
            <img className={style.image} src={(mode)?"../public/icon-sun.svg":"../public/icon-moon.svg"} alt="light" />
        </div>
    );
}