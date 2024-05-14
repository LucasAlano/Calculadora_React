import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleClick = (label) => {
    if (label === '=') {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Erro');
      }
    } else if (label === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(displayValue + label);
    }
  };
  

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        <div className="row">
            <Button label="7" onClick={handleClick} />
            <Button label="8" onClick={handleClick} />
             <Button label="9" onClick={handleClick} />
            <Button label="/" onClick={handleClick} />
        </div>
        <div className="row">
            <Button label="4" onClick={handleClick} />
            <Button label="5" onClick={handleClick} />
            <Button label="6" onClick={handleClick} />
            <Button label="*" onClick={handleClick} />
        </div>
        <div className="row">
            <Button label="1" onClick={handleClick} />
            <Button label="2" onClick={handleClick} />
            <Button label="3" onClick={handleClick} />
            <Button label="-" onClick={handleClick} />
        </div>
        <div className="row">
            <Button label="0" onClick={handleClick} />
            <Button label="C" onClick={handleClick} />
            <Button label="=" onClick={handleClick} />
            <Button label="+" onClick={handleClick} />
        </div>
    </div>
</div>
  );
};

export default Calculator;