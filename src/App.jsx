import React from 'react'
import '@mantine/core/styles.css'
import Dashboardlayout from './layout/Dashboardlayout'
import {Route , Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <h1 className="text-red-500">Hello</h1>
      <Routes>
           <Route path='/' element={<Dashboardlayout/>}/>
      </Routes>
   
    </div>
  )
}

export default App
