import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    button:{
        width:'50%',
        height:'30px',
        backgroundColor:'#7C5DFA',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderRadius:'5rem',
        cursor:'pointer',
    },
    container:{
        backgroundColor:'#F8F8FB',
        borderRadius: '5rem',
        width:'20px',
        height:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    image:{},
    text:{
        fontSize:'.7rem'
    },
    '@media (min-width: 640px)':{
        button:{
            height:'50px',
        },
        container:{
            width:'30px',
            height:'30px',
        },
        text:{
            fontSize: '1.2rem',
            fontWeight:'700',
        }
    }
});

export const NewButton = () =>{
    const style = useStyle();
    return (
        <div className={style.button}>
            
            <div className={style.container}>
                <img src="public/icon-plus.svg" alt="+" />
            </div>
            <p className={style.text}>new</p>
        
        </div>
    );
}