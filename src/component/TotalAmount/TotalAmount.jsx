import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Main = styled.div`
        position:relative;
        width:90%;
        height: 25%;
        background-color:${props=> (props.mode)?'#252945' :'#F9FAFE'};
        border-radius:.4rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        @media (min-width:640px){
            height:40%;
        }
`;
const Information = styled.div`
        width:90%;
        height:80%;
        display:flex;
        flex-direction:column;
        gap:.9rem;
`;
const InformationTitle = styled.div`
        display:none;
        @media (min-width: 640px){
            display:flex;
            height: 30px;
        }
`
const InformationPrice = styled.div`
        width:20%;
        text-align:right;
`
const InformationQuantity = styled.div`
        width:10%;
        text-align:center;
`
const InformationDivTitle = styled.div`
    width:50%;
`
const Unit = styled.div`
    font-size:12px;
    font-weight:700;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media (min-width: 640px){
        justify-content:flex-start;
    }
`
const UnitName = styled.div`
        display:flex;
        flex-direction:column;
        gap:.3rem;
        @media (min-width: 640px){
            width:50%
        }
`
const UnitQuantMobile = styled.p`
    color:#888EB0;
    @media (min-width: 640px){
        display: none;
    }
`
const TotalDiv = styled.div`
        position:absolute;
        bottom:0;
        background-color:${props=> (props.mode)? '#0C0E16' :'#373B53'};
        width:100%;
        height:30%;
        font-size: 11px;
        display:flex;
        justify-content:center;
        align-items:center;
        ${props=> (!props.mode)? 'color:#FFFFFF':null}
`
const TotalArticle = styled.article`
        width:90%;
        display:flex;
        justify-content:space-between;
        align-items:center;
`
const Qantity = styled.p`
    display:none;
    @media (min-width: 640px){
        display:block;
        width:10%;
        textAlign:center;
    }
`
const Price = styled.p`
    display:none;
    @media (min-width: 640px){
        display:block;
        width:20%;
        textAlign:right;
    }

`
const PriceT = styled.p`
    display:block;
    @media (min-width: 640px){
        width:20%;
        textAlign:right;
    }
`
const TotalPrice = styled.p`
    font-size:20px;
    font-weight:700;
`
export const TotalAmount = () =>{
    const mode = useSelector(state=> state.darkMode.value)
    return (
        <Main mode={mode}>
            <Information>

                <InformationTitle>
                    <InformationDivTitle>New item</InformationDivTitle>
                    <InformationQuantity>QTY.</InformationQuantity>
                    <InformationPrice>price</InformationPrice>
                    <InformationPrice>Total</InformationPrice>
                </InformationTitle>

                <Unit>
                    <UnitName>
                        <p>banner design</p>
                        <UnitQuantMobile>1 x €156.00</UnitQuantMobile>
                    </UnitName>
                    <Qantity>1</Qantity>
                    <Price>€ 156.00</Price>
                    <PriceT>€ 156.00</PriceT>
                </Unit>

                <Unit>
                    <UnitName>
                        <p>email design</p>
                        <UnitQuantMobile>2 x €200.00</UnitQuantMobile>
                    </UnitName>
                    <Qantity>2</Qantity>
                    <Price>€ 200.00</Price>
                    <PriceT>€ 400.00</PriceT>
                </Unit>

            </Information>

            <TotalDiv mode={mode}>
                <TotalArticle>
                    <p>Amount Due</p>
                    <TotalPrice>€ 556.00</TotalPrice>
                </TotalArticle>
            </TotalDiv>
        </Main>
    );
}