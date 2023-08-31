import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import Home from "./components/Home"
import ExternalPanels from "./components/ExternalPanels"
import InternalPanels from "./components/InternalPanels"
import Header from "./components/Header"
import PageAdmin from "./components/PageAdmin"
import SignUp from "./components/SignUp"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/externalPanels" element={<ExternalPanels />} />
        <Route path="/internalPanels" element={<InternalPanels />} />
        <Route path="/pageAdmin" element={<PageAdmin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
