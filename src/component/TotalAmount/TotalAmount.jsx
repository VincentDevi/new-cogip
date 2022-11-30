import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        width:'80%',
        height: '25%',
        backgroundColor:'#252945',
        borderRadius:'.4rem',
    },
    add:{
        height:'75%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    total:{
        height:'25%',
        backgroundColor: '#0C0E16',
        borderBottomLeftRadius:'.4rem',
        borderBottomRightRadius:'.4rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        fontSize:'.7rem',
    },
    price:{
        fontSize:'1rem',
        fontWeight: '900',
    },
    item:{
        height:'auto',
        width:'90%',
        fontSize:'.7rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    itemTotal:{
        width:'50%',
        textAlign:'right',
        fontWeight:'900',
    },
    itemDesc:{
        width:'50%',
        display:'flex',
        flexDirection:'column',
        gap:'.4rem',
    },
    name:{
        fontWeight:'700',
        fontSize:'.6rem'
    },
    quantity:{
        fontSize: '.5rem'
    }
});
export const TotalAmount = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <div className={style.add}>
                <div className={style.item}>
                    <div className={style.itemDesc}>
                        <p className={style.name}>Banner Design</p>
                        <p className={style.quantity}>1 x € 156.00</p>
                    </div>
                    <p className={style.itemTotal}>€ 156.00</p>
                </div>
                <div className={style.item}>
                    <div className={style.itemDesc}>
                        <p className={style.name}>Email Design</p>
                        <p className={style.quantity}>1 x € 400.00</p>
                    </div>
                    <p className={style.itemTotal}>€ 400.00</p>
                </div>
            </div>
            <div className={style.total}>
                <p>amount due</p>
                <p className={style.price}>€ 556.00</p>
            </div>
        </div>
    );
}