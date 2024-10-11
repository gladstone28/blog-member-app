import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import MemberManagement from './components/MemberManagement';  // Correct import of MemberManagement
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/upload-members" element={<MemberManagement />} />  {/* Route to MemberManagement */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
