import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SaveTheDatePage from './pages/SaveTheDatePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SaveTheDatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
