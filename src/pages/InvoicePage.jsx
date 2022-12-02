import React from "react";
import { AllInvoices } from "../component/AllInvoices/AllInvoices";
import { Header } from "../component/Header/Header";
import {useSelector} from 'react-redux';
import styled from "styled-components";

const Div = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width: 1024px){
        flex-direction:row;
    }
` ;


export const InvoicePage = () =>{
    const mode = useSelector((state)=> state.darkMode.value);
    return (
        <Div>
            <Header/>
            <AllInvoices/>
        </Div>
    );
}