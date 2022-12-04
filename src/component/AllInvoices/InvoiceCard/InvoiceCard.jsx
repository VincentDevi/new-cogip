import React from "react";
import { StatusButton } from "./StatusButton/StatusButton";
import {useSelector} from 'react-redux';
import { InvoiceCardStyle } from "./InvoiceCard.style";
import { InvoiceCardNameStyle } from "./StatusButton/InvoiceCardName.style";
import { InvoiceCardRefStyle } from "./StatusButton/InvoiceCardRef.style";
import { InvoiceCardDateStyle } from "./InvoiceCardDate.style";
import { InvoiceCardPriceStyle } from "./InvoiceCardPrice.style";


 
export const InvoiceCard = ({data}) =>{
    const mode = useSelector((state)=> state.darkMode.value)
    let date = data.due_date
    date = date.split(":")[0];
    return (
        <InvoiceCardStyle mode={mode}>
           <section>
                <InvoiceCardRefStyle>
                    <span>#</span>
                    {data.ref}
                </InvoiceCardRefStyle>
                <InvoiceCardDateStyle>
                    Due {date}
                </InvoiceCardDateStyle>
                <InvoiceCardPriceStyle>
                    € {data.total_price}
                </InvoiceCardPriceStyle>
                <InvoiceCardNameStyle>
                    {data.first_name_contact} {data.last_name_contact}
                </InvoiceCardNameStyle>
                <article>
                    <StatusButton/>
                </article>
           </section>
        </InvoiceCardStyle>
    );
}