// src/App.jsx
import React from 'react';
import Calculator from "./components/Calculator"; // ✅ import the file correctly

const App = () => {
  return (
    <div>
      <h1>useMemo Demo</h1>
      <Calculator />   
    </div>
  )
}

export default App;
