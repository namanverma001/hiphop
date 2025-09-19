import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import Entertainment from './pages/Entertainment';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;