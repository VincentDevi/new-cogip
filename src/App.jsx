import React from "react";
import { Route, Routes } from "react-router";
import { InvoiceDataPage } from "./pages/InvoiceDataPage";
import { InvoicePage } from "./pages/InvoicePage";
import { useSelector } from "react-redux";
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.mode ? '#0C0E16' : '#F8F8FB')};
    color: ${props=> (props.mode)? '#F8F8FB': '#0C0E16'};
    overflow-x: hidden;
    font-family: 'League Spartan', sans-serif;
  }
  a{
    text-decoration:none;
    color: ${props=> (props.mode)? '#F8F8FB': '#0C0E16'};
  }
`
function App() {

  const mode = useSelector((state)=> state.darkMode.value)

  return (
    <>
      <GlobalStyle mode={mode}/>
        <Routes>
          <Route path="/" element={<InvoicePage/>} />
          <Route path="/invoice/:id" element={<InvoiceDataPage/>} />
        </Routes>
    </>

  )
}

export default App
