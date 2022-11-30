import React from "react";
import { createUseStyles } from "react-jss";
import { StatusButton } from "./StatusButton/StatusButton";

const useStyle = createUseStyles({
    main:{
        height:'134px',
        width:'80vw',
        backgroundColor: '#1E2139',
        borderRadius: '.7rem',
        color:'#F8F8FB',
        fontSize:'.7rem',
        marginBottom:'1rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    section:{
        height:'90%',
        width:'90%',
        display:'flex',
        flexDirection: 'column',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
    },
    name:{
        fontSize:'.7rem',
        width:'50%',
        height:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    ref:{
        fontWeight:'700',
        width:'50%',
        height:'50%',
        display:'flex',
        alignItems:'center',
    },
    date:{
        fontWeight:'light',
        fontSize:'.6rem',
        width:'50%',
        height:'25%',
        display:'flex',
        alignItems:'flex-end',
    },
    price:{
        fontWeight: '700',
        width:'50%',
        height:'25%',
    },
    button:{
        height:'50%',
        width:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    hash:{
        fontWeight:'200',
    },
    '@media (min-width:640px)':{
        main:{
            height: '72px',
            width:'90vw',
        },
        section:{
            flexDirection:'row',
        },
        name:{
            width:'20%',
            order:'2',
        },
        ref:{
            width:'20%',
            order:'0',
        },
        date:{
            width:'20%',
            order:'1',
        },
        price:{
            width:'20%',
            order:'3',
            display:'flex',
            alignItems:'center',
            justifyContent:'flex-end',
        },
        button:{
            width:'20%',
            order:'4',
        },
    }
})

export const InvoiceCard = () =>{
    const style = useStyle();
    return (
        <div className={style.main}>
           <div className={style.section}>
            <p className={style.ref}><span className={style.hash}>#</span>RT3080</p>
            <p className={style.date}>Due 19 Aug 2021</p>
            <p className={style.price}>€ 1,800.90</p>
            <p className={style.name}>Jensen Huang</p>
            <div className={style.button}>
                <StatusButton/>
            </div>
           </div>
        </div>
    );
}