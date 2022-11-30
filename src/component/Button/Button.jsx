import React from "react";
import { createUseStyles } from "react-jss";

const useStyle=createUseStyles({
    delete:{
        paddingRight:'.8rem',
        paddingLeft:'.8rem',
        height:'40px',
        backgroundColor:'#EC5757',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'1.5rem',
        fontSize:'.7rem',
        cursor:'pointer',
    },
    edit:{
        paddingRight:'.8rem',
        paddingLeft:'.8rem',
        height:'40px',
        backgroundColor:'#252945',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'1.5rem',
        fontSize:'.7rem',
        cursor:'pointer',
    },
    paid:{
        paddingRight:'.8rem',
        paddingLeft:'.8rem',
        height:'40px',
        backgroundColor:'#7C5DFA',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:'1.5rem',
        fontSize:'.7rem',
        cursor:'pointer',
    }
});
export const Button = ({type}) => {
    const style= useStyle();
    return (
        <div className={(type==="edit")? style.edit: (type==="delete")? style.delete: style.paid}>
            <p>{type}</p>
        </div>
    );
}