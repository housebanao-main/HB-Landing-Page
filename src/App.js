import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ThankYoupage } from './pages/ThankYoupage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />  // Redirect from root to /Home
        <Route path="/Home" element={<HomePage />} />
        <Route path="/ThankYou" element={<ThankYoupage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
