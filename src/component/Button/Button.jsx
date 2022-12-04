import React from "react";
import { ButtonStyle } from "./Button.style";

export const Button = ({type}) => {
    return (
        <ButtonStyle type={type}>
            <p>{type}</p>
        </ButtonStyle>
    );
}