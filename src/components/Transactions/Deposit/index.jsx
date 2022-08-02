import React, { useContext } from 'react';
import './styles.css';
import { DisplayContext } from '../../../contexts';

export function Deposit() {
  const [display, setDisplay] = useContext(DisplayContext);
  
  return (
    <>
      Deposit amount
      <input />
      <button>Enter</button>
      <button onClick={() => setDisplay('home')}>Back</button>
    </>
  );
}
