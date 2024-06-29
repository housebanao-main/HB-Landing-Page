
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {  HomePage } from './pages/HomePage'
import { ThankYoupage } from './pages/ThankYoupage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Thankyou" element={<ThankYoupage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

