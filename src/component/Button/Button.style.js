import styled from "styled-components";

export const ButtonStyle = styled.div`
    padding-right:.8rem;
    padding-left:.8rem;
    height:40px;
    background-color:${props=> (props.type ==="delete")? '#EC5757': (props.type==="edit")? '#252945':'#7C5DFA'};
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:1.5rem;
    cursor:pointer;
`