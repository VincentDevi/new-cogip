import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
    main:{
        position:'relative',
        width:'90%',
        height: '25%',
        backgroundColor:'#252945',
        borderRadius:'.4rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    division:{
        width:'90%',
        height:'80%',
        display:'flex',
        flexDirection:'column',
        gap:'.9rem',
    },
    divisionTitle:{
        display:'none',
        height:'30px',
    },
    divTitleName:{
        width:'50%',
    },
    divTitleQuant:{
        width:'10%',
        textAlign:'center',
    },
    divTitleRest:{
        width:'20%',
        textAlign:'right',
    },
    descriptif:{
        fontSize:'12px',
        fontWeight:'700',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
    },
    descriptifMobile:{
        display:'flex',
        flexDirection:'column',
        gap:'.3rem',
    },
    descTitleMobile:{
        color:'#888EB0',
    },
    total:{
        position:'absolute',
        bottom:'0',
        backgroundColor:'#0C0E16',
        width:'100%',
        height:'30%',
        fontSize: '11px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    totalDiv:{
        width:'90%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    totalPrice:{
        fontSize:'20px',
        fontWeight:'700',
    },
    price:{
        display:'none'
    },
    priceT:{
        display:'block', 
     },
    quantity:{
        display:'none'
    },
    '@media (min-width:640px)':{
        main:{
            height:'40%',
        },
        descTitleMobile:{
            display:'none',
        },
        descriptif:{
            justifyContent:'flex-start'
        },
        descriptifMobile:{
            width:'50%',
        },
        divisionTitle:{
            display:'flex',
        },
        price:{
            display:'block',
            width:'20%',
            textAlign:'right'
        },
        priceT:{
            width:'20%',
            textAlign:'right'          },
        quantity:{
            display:'block',
            width:'10%',
            textAlign:'center',
        },
  
    }
});
export const TotalAmount = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
            <div className={style.division}>
                <div className={style.divisionTitle}>
                    <p className={style.divTitleName}>New item</p>
                    <p className={style.divTitleQuant}>QTY.</p>
                    <p className={style.divTitleRest}>price</p>
                    <p className={style.divTitleRest}>Total</p>
                </div>
                <div className={style.descriptif}>
                    <div className={style.descriptifMobile}>
                        <p>banner design</p>
                        <p className={style.descTitleMobile}>1 x €156.00</p>
                    </div>
                    <p className={style.quantity}>1</p>
                    <p className={style.price}>€ 156.00</p>
                    <p className={style.priceT}>€ 156.00</p>
                </div>
                <div className={style.descriptif}>
                    <div className={style.descriptifMobile}>
                        <p>email design</p>
                        <p className={style.descTitleMobile}>2 x €200.00</p>
                    </div>
                    <p className={style.quantity}>2</p>
                    <p className={style.price}>€ 200.00</p>
                    <p className={style.priceT}>€ 400.00</p>
                </div>
            </div>
            <div className={style.total}>
                <div className={style.totalDiv}>
                    <p>Amount Due</p>
                    <p className={style.totalPrice}>€ 556.00</p>
                </div>
            </div>
        </div>
    );
}