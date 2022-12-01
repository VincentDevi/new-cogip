import React from "react";
import { createUseStyles } from "react-jss";
import { Button } from "../Button/Button";

const useStyle= createUseStyles({
    main:{
        height:'90%',
        width:'90%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'.5rem',
        color:'#F8F8FB',
        fontWeight:'700',
        fontSize:'12px',
    },
    '@media (min-width:640px)':{
        main:{
            width:'100%',
            justifyContent:'flex-end',
        }
    },
});
export const CudButton = () =>{
    const style = useStyle();
    const typeArray = ['edit','delete','mark as paid'];
    return(
        <div className={style.main}>
            {typeArray.map((item,index)=>{
                return <Button key={index} type={item}/>
            })}
        </div>
    );
}