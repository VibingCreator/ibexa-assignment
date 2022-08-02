import React, { useContext } from 'react';
import './styles.css';
import { DisplayContext } from '../../contexts';

export function Home() {
  const [display, setDisplay] = useContext(DisplayContext);

  return (
    <>
      <div>choose transaction</div>
      <button onClick={() => setDisplay('deposit')}>Deposit</button>
      <button onClick={() => setDisplay('withdraw')}>Withdraw</button>
      <button onClick={() => setDisplay('balance')}>Balance</button>
    </>
  );
}
