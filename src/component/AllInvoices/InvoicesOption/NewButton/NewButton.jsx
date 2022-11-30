import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    button:{
        width:'50%',
        height:'30px',
        backgroundColor:'#7C5DFA',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'5rem',
        cursor:'pointer',
    },
    section:{
        height:'100%',
        width:'40%',
        display:'flex',
        alignItems:'center',
    },
    container:{
        backgroundColor:'#F8F8FB',
        borderRadius: '5rem',
        width:'80%',
        maxHeight:'80%',
        aspectRatio:'1/1',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:'55%',
        aspectRatio:'1/1',
    },
    text:{
        width:'50%',
        fontSize:'.7rem',
    },
    '@media (min-width: 640px)':{
        button:{
            height:'40px',
            maxWidth:'150px',
        },
        container:{
            width:'50%',
            maxHeight:'80%',
            aspectRatio:'1/1'
        },
        image:{
            width:'40%',
            aspectRatio:'1/1',
        },
        text:{
            fontWeight:'700',
        }
    }
});

export const NewButton = () =>{
    const style = useStyle();
    return (
        <div className={style.button}>
            <div className={style.section}>
                <div className={style.container}>
                    <img className={style.image} src="public/icon-plus.svg" alt="+" />
                </div>
            </div>
            <p className={style.text}>new</p>
        </div>
    );
}