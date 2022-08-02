import React, { useContext } from 'react';
import './styles.css';
import { DisplayContext } from '../../../contexts';

export function Withdraw() {
  const [display, setDisplay] = useContext(DisplayContext);
  
  return (
    <>
      Withdraw amount
      <input />
      <button>Enter</button>
      <button onClick={() => setDisplay('home')}>Back</button>
    </>
  );
}
