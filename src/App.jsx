import React, { createContext, useState } from 'react';
import './App.css'
import { Home, Keypad, Balance, Withdraw, Deposit } from './components';
import { DisplayContext } from './contexts';

const router = {
  home: <Home />,
  balance: <Balance />,
  withdraw: <Withdraw />,
  deposit: <Deposit />,
}

export function App() {
  const [display, setDisplay] = useState('home');

  return (
    <>
      <DisplayContext.Provider value={[display, setDisplay]}>
        {router[display]}
      </DisplayContext.Provider>
      <Keypad />
    </>
  );
}
