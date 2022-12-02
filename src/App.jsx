import React from "react";
import { Route, Routes } from "react-router";
import { InvoiceDataPage } from "./pages/InvoiceDataPage";
import { InvoicePage } from "./pages/InvoicePage";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Div = styled.div`
  width:100vw;
  height:100vh;
  background-color: ${props=> (props.mode===true)? '#141625': '#F8F8FB'};
  color: ${props=> (props.mode)? '#F8F8FB': '#0C0E16'};
`

//#141625;
function App() {

  const mode = useSelector((state)=> state.darkMode.value)

  return (
    <div className="App">
        <Div mode={mode}>
          <Routes>
          <Route path="/" element={<InvoicePage/>} />
          <Route path="/invoice/:id" element={<InvoiceDataPage/>} />
          </Routes>
        </Div>
    </div>

  )
}

export default App
