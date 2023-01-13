import React from 'react';
import { Map } from 'src/Components/Map';
import "./App.css";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Population Tracker</h2>
      </header>
      <Map />
    </div>
  );
}

