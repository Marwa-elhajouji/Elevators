import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import { useState } from "react"

import "./App.css"
// import ExternalPanel from './components/ExternalPanel'
import Home from "./components/Home"
import ExternalPanels from "./components/ExternalPanels"
import InternalPanels from "./components/InternalPanels"
import Header from "./components/Header"
import PageAdmin from "./components/PageAdmin"
function App() {
  return (
    // <>
    //   <ExternalPanels />
    //   <InternalPanels />
    // </>
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/externalPanels">ExternalPanels</Link>
          </li>
          <li>
            <Link to="/internalPanels">InterbalPanels</Link>
          </li>
        </ul>
      </nav> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/externalPanels" element={<ExternalPanels />} />
        <Route path="/internalPanels" element={<InternalPanels />} />
        <Route path="/pageAdmin" element={<PageAdmin />} />
      </Routes>
    </Router>
  )
}

export default App
