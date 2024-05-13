import React, { useState, useMemo } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [number, setNumber] = useState(1);

  // Change background color randomly
  const changeBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  // Double the number
  const doubleNumber = () => {
    // Double the number
    setNumber(number * 2);

    // Increase load by running extra loop
    for (let i = 0; i < 100000000; i++) {
      // Perform some heavy computation
      Math.random();
    }
  };

  // Memoize the result of doubling number
  const doubledNumber = useMemo(() => {
    console.log('Computing doubled number...');
    let result = number;
    for (let i = 0; i < 2; i++) {
      result *= 2;
    }
    return result;
  }, [number]);

  return (
    <div style={{ backgroundColor }}>
      <h1>useMemo Example with Increased Load</h1>
      <button onClick={changeBackgroundColor}>Change Background Color</button>
      <p>Current Number: {number}</p>
      <button onClick={doubleNumber}>Double Number</button>
      <p>Doubled Number: {doubledNumber}</p>
    </div>
  );
}

export default App;
