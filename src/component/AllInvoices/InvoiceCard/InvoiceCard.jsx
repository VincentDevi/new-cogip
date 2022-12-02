import React from "react";
import { createUseStyles } from "react-jss";
import { StatusButton } from "./StatusButton/StatusButton";
import {useSelector} from 'react-redux';
import styled from "styled-components";

const useStyle = createUseStyles({

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
    },
 
})
const Main = styled.div`
    height:134px;
    width:80vw;
    background-color: ${props=>(props.mode)?'#1E2139':'#FFFFFF'};
    border-radius: .7rem;
    font-size:.7rem;
    margin-bottom:1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    @media (min-width: 640px){
        height:72px;
        width:90vw;
    }
    @media (min-width: 1024px){
        width:45vw;
    }
` 
export const InvoiceCard = ({data}) =>{
    const style = useStyle();
    const mode = useSelector((state)=> state.darkMode.value)
    let date = data.due_date
    date = date.split(":")[0];
    return (
        <Main mode={mode}>
           <div className={style.section}>
            <p className={style.ref}><span className={style.hash}>#</span>{data.ref}</p>
            <p className={style.date}>Due {date}</p>
            <p className={style.price}>€ {data.total_price}</p>
            <p className={style.name}>{data.first_name_contact} {data.last_name_contact}</p>
            <div className={style.button}>
                <StatusButton/>
            </div>
           </div>
        </Main>
    );
}