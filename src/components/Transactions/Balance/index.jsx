import React, { useContext } from 'react';
import './styles.css';
import { DisplayContext } from '../../../contexts';

export function Balance() {
  const [display, setDisplay] = useContext(DisplayContext);

  return (
    <>
      Your balance: $0.00
      <button onClick={() => setDisplay('home')}>Back</button>
    </>
  );
}
