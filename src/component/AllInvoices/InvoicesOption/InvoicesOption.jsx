import React from "react";
import { Filter } from "./Filter/Filter";
import { InvoicesCount } from "./InvoicesCount/InvoiceCount";
import { NewButton } from "./NewButton/NewButton";
import styled from "styled-components";
import { InvoicesOptionStyle } from "./InvoicesOption.style";



export const InvoicesOption = () =>{
    return (
        <InvoicesOptionStyle >
            <InvoicesCount/>
            <section>
                <Filter/>
                <NewButton/>
            </section>
        </InvoicesOptionStyle>
    );
}