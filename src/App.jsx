import React from 'react';
import './App.css'

import { Home, Keypad, Balance, Withdraw, Deposit } from './components';

export function App() {
  return (
    <>
      <Balance />
      <Withdraw />
      <Deposit />
      <Home />
      <Keypad />
    </>
  );
}
