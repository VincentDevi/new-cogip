import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    section:{
        width: '100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
       
    },
    container:{
        width:'30%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer',
    },
    image:{
        maxWidth:'60px',
        width: '100%',
        height:'auto',
        borderRadius:'5rem',
    }
})

export const Profil = () =>{

    const style = useStyle();

    return (
       <div className={style.section}>
            <div className={style.container}>
                <img className={style.image} src="public/image-avatar.jpg" alt="profil" />
            </div>
       </div>
    );
}