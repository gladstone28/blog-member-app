
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Blog Member App</h1>
      <nav>
        <ul>
          <li><Link to="/blog">View Blog Articles</Link></li>
          <li><Link to="/upload-members">Upload Members CSV</Link></li>  {/* Correct path */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;

