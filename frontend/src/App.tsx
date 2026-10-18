import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SaveTheDatePage from './pages/SaveTheDatePage'
import Version1 from './pages/Version1'
import Version2 from './pages/Version2'
import Version3 from './pages/Version3'
import Version4 from './pages/Version4'
import Version5 from './pages/Version5'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SaveTheDatePage />} />
          <Route path='/v1' element={<Version1 />}/>
          <Route path='/v2' element={<Version2 />}/>
          <Route path='/v3' element={<Version3 />}/>
          <Route path='/v4' element={<Version4 />}/>
          <Route path='/v5' element={<Version5 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
