import React from "react";
import { createUseStyles } from "react-jss";
import { StatusButton } from "../AllInvoices/InvoiceCard/StatusButton/StatusButton";
import { CudButton } from "../CudButton/CudButton";
import styled from "styled-components";
import { useSelector } from "react-redux";

const useStyle= createUseStyles({
    content:{
       
    },
    section:{
        width:'80%',
        height:'90%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    text:{
        fontSize:'1rem',
    },
    cud:{
        display:'none',
    },
    '@media (min-width: 640px)':{
        main:{
            
        },
        section:{
            width:'40%',
            justifyContent:'flex-start',
            gap:'1.5rem',
        },
        cud:{
            width:'50%',
            display:'flex',
        }
    },
});
const Content = styled.div`
    height:10vh;
    width:90vw;
    background-color:${props=>(props.mode)?'#1E2139': '#FFFFFF'};
    border-radius:.4rem;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:1rem;
    @media (min-width: 1024px){
        width: 50%;
    }
`
export const InvoiceStatus = () =>{
    const style = useStyle();
    const mode = useSelector(state=> state.darkMode.value)

    return (
        <Content mode={mode}>
            <div className={style.section}>
                <p className={style.text}>status</p>
                <StatusButton/>
            </div>
            <div className={style.cud}>
                <CudButton/>
            </div>
    </Content>
    );
}


