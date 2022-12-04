import React from "react";
import { InvoiceToData } from "./InvoiceToData/InvoiceToData";
import { InvoiceToBillTo, InvoiceToStyle } from "./InvoiceTo.style";
import { InvoiceToInfoStyle } from "./InvoiceToInfo.style";
import { InvoiceToAddressStyle } from "./InvoiceToAddress.style";
import { InvoiceToEmail } from "./InvoiceToEmail.style";


export const InvoiceTo = () =>{
    const dataArray = [
        ["invoice date", "21 aug 2021"],
        ["due date", "20 sep 2021"],
    ];
    return (
        <InvoiceToStyle>
            
            <InvoiceToInfoStyle>
                {dataArray.map((item,index)=>{
                    return <InvoiceToData key={index} title={item[0]} date={item[1]}/>
                })}
                <InvoiceToBillTo>
                   <article>
                        <p>bill to</p>
                        <h2>Alex grim</h2>
                   </article>
                    <InvoiceToAddressStyle>
                        <p>84 Church way</p>
                        <p>Bradford</p>
                        <p>BD19PB</p>
                        <p>United Kingdom</p>
                    </InvoiceToAddressStyle>
                </InvoiceToBillTo>
            </InvoiceToInfoStyle>

            <InvoiceToEmail>
                <p>sent to</p>
                <h2>alexgrim@gmail.com</h2>
            </InvoiceToEmail>
        </InvoiceToStyle>
    );
}

