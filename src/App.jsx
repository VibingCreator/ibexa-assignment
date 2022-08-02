import React, { useState } from 'react';
import './App.css'
import { Display, Keypad } from './components';
import { AccountContext } from './contexts/Account';

export function App() {
  const [account, setAccount] = useState({ balance: 500 });

  return (
    <>
      <AccountContext.Provider value={[account, setAccount]}>
        <Display />
      </AccountContext.Provider>
      <Keypad />
    </>
  );
}
