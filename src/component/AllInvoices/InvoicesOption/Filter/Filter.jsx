import React from "react";
import { FilterStyle } from "./Filter.style";

 
export const Filter = () =>{
    return (
        <FilterStyle>
            <h3>Filter</h3>
            <div>
                <img src="public/icon-arrow-down.svg" alt="more" />
            </div>
        </FilterStyle>
    );
}