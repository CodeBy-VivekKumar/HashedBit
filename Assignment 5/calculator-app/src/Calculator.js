import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'sub':
        res = n1 - n2;
        break;
      case 'mul':
        res = n1 * n2;
        break;
      case 'div':
        res = n2 !== 0 ? n1 / n2 : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="button-group">
        <button onClick={() => handleOperation('add')}>Add</button>
        <button onClick={() => handleOperation('sub')}>Subtract</button>
        <button onClick={() => handleOperation('mul')}>Multiply</button>
        <button onClick={() => handleOperation('div')}>Divide</button>
      </div>
      <div className="result-box">Result: {result}</div>
    </div>
  );
}

export default Calculator;