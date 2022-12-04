import styled from "styled-components";

export const FilterStyle = styled.div`
    width:50%;
    display:flex;
    align-items: center;
    justify-content:center;
    gap:.5rem;
    h3{
        cursor: pointer;
    }
    div{
        width:auto;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        image {
            max-width:10px;
            width:100%;
            height:auto;
        }
    }
`