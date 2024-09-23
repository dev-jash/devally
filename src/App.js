import React, { useState } from 'react';
import './App.css'; // Make sure to create this CSS file

function App() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleFace = () => {
    setIsHappy(!isHappy);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My React App!</h1>
      <p>This is a simple React app deployed on GitHub.</p>
      <div className={`face ${isHappy ? 'happy' : 'sad'}`} onClick={toggleFace}>
        <div className="eye left-eye"></div>
        <div className="eye right-eye"></div>
        <div className="mouth"></div>
      </div>
    </div>
  );
}

export default App;
