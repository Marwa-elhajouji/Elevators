import { useState } from 'react'

import './App.css'
// import ExternalPanel from './components/ExternalPanel'
import ExternalPanels from './components/ExternalPanels'
import InternalPanels from './components/InternalPanels'
function App() {
  

  return (
    <>
      <ExternalPanels />
      <InternalPanels />
    </>
  )
}

export default App
