import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Landingpage from './Components/LandingPage'
import FbForm from './Components/Fbform'
import Blockchain from './Components/Form'
function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Landingpage />}/>
      <Route path='Form' element={<FbForm />} />
      <Route path='Blockchain' element={<Blockchain />}/>
    </Routes>
     
  )
}

export default App