import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    section:{
        height:'15vh',
        width:'100vw',
    },
    title:{

    },
    container:{
        width: '20px',
        height: 'auto',
        display : 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: '5px',
        height: 'auto',
    },
})
export const Filter = () =>{
    const style = useStyle();
    return (
        <div className={style.section}>
            <h2 className={style.title}>Filter</h2>
            <div className={style.container}>
                <img className={style.image} src="public/icon-arrow-down.svg" alt="more" />
            </div>
        </div>
    );
}