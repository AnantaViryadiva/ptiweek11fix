import React, { useState } from "react";

function App() {
  const [menghitung, setMenghitung] = useState(0);

  function increase() {
    setMenghitung(menghitung + 1);
  }
  function decrease() {
    setMenghitung(menghitung - 1);
  }

  return (
    <div className="container">
      <h1>{menghitung}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
