import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        cursor:'pointer', 
    },
    image:{ 
        width:'5px',
        height:'auto',
    }

})
export const LightDarkToggle = () =>{
    const style = useStyle();

    return (
        <div className={style.container}>
            <img className={style.container} src="public/icon-sun.svg" alt="light" />
        </div>
    );
}