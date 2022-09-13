import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Day } from './components/templates/Day';
import { Home } from './components/templates/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/:id" element={<Day />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
