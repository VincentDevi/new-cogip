import React from "react";
import { Route, Routes } from "react-router";
import { InvoiceDataPage } from "./pages/InvoiceDataPage";
import { InvoicePage } from "./pages/InvoicePage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InvoicePage/>} />
        <Route path="/invoice/:id" element={<InvoiceDataPage/>} />
      </Routes>
      
    </div>
  )
}

export default App
