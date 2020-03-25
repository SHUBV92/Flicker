import React from 'react';
import fragrance from '../images/fragrance.jpeg'
// import './App.css';

function home() {
return (
    <div className="App">
      <header className="App-header">
        <img src={fragrance} className="App-logo" alt="logo" />
        <p>
          Fragrance & Flicker
        </p>
        <a
          className="App-link"
          href="https://unolusso.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
}

export default home