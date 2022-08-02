import React, { useState } from 'react';
import './App.css'
import { Transaction, Keypad } from './components';
import { InputContext } from './contexts';

export function App() {
  const [input, setInput] = useState('');

  return (
    <>
      <InputContext.Provider value={[input, setInput]}>
        <Transaction />
        <Keypad />
      </InputContext.Provider>
    </>
  );
}
