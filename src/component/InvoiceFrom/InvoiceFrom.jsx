import React from "react";
import { InvoiceFromAddressStyle, InvoiceFromRefStyle, InvoiceFromStyle } from "./InvoiceFrom.style";

export const InvoiceFrom = () =>{
    return (
        <InvoiceFromStyle>
            <InvoiceFromRefStyle>
                <h3>#XM9141</h3>
                <p>Graphic design</p>
            </InvoiceFromRefStyle>
            <InvoiceFromAddressStyle>
                <p>19 union Terrace</p>
                <p>London</p>
                <p>E1 3EZ</p>
                <p>United Kingdom</p>
            </InvoiceFromAddressStyle>
        </InvoiceFromStyle>
    );
}