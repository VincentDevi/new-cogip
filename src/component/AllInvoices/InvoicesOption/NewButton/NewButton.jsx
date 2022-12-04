import React from "react";
import { NewButtonStyle } from "./NewButton.style";


export const NewButton = () =>{
    return (
        <NewButtonStyle>
            <article>
                <div>
                    <img src="public/icon-plus.svg" alt="+" />
                </div>
            </article>
            <h3>new</h3>
        </NewButtonStyle>
    );
}