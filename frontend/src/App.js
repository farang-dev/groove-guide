import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import EventPage from './EventPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
