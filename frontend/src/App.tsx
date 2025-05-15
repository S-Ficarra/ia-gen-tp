import React, { useState, useEffect } from 'react';
import { fetchCounter, incrementCounter, resetCounter } from './counterService';
import Logo from './assets/EPSI_Logo.png';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetchCounter().then(setCount);
  }, []);

  const handleIncrement = async () => {
    const newCount = await incrementCounter();
    setCount(newCount);
  };

  const handleReset = async () => {
    const newCount = await resetCounter();
    setCount(newCount);
  };

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Logo Epsi" />
      </header>
      <div className='count-container'>
      <h1>Count: {count}</h1>
      </div>
      <div className="button-container">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;