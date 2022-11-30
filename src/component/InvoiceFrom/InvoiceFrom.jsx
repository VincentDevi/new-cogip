import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        width:'90%',
        height: '20%',
        marginTop:'1rem',
        display:'flex',
        flexDirection:'column',
        fontSize: '.6rem',
    },
    address:{
        width:'50%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        gap:'.2rem'
    },
    ref:{
        width:'50%',
        height:'20%',
        display:'flex',
        flexDirection:'column',
        gap: '.2rem',
    },
    reference:{
        fontWeight:'700',
    },
});
export const InvoiceFrom = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <div className={style.ref}>
                <p className={style.reference}>#XM9141</p>
                <p>Graphic design</p>
            </div>
            <div className={style.address}>
                <p>19 union Terrace</p>
                <p>London</p>
                <p>E1 3EZ</p>
                <p>United Kingdom</p>
            </div>
        </div>
    );
}