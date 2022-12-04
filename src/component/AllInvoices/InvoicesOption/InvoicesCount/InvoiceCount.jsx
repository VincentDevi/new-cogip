import React from "react";
import {InvoicesCountStyle} from "./InvoicesCount.style.js";


export const InvoicesCount = () =>{
    return (
     <InvoicesCountStyle>
        <div>
            <h2>Invoices</h2>
            <p>7 invoices</p>
        </div>
     </InvoicesCountStyle>
    );
}