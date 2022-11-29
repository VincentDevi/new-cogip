import React from "react";
import { Route, Routes } from "react-router";
import { InvoicePage } from "./pages/InvoicePage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<InvoicePage/>} />
      </Routes>
      
    </div>
  )
}

export default App
