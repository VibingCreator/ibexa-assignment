import React, { useState } from 'react';
import { Home, Balance, Withdraw, Deposit } from '../../components';
import { DisplayContext } from '../../contexts';

const router = {
  home: <Home />,
  balance: <Balance />,
  withdraw: <Withdraw />,
  deposit: <Deposit />,
}

export function Display() {
  const [display, setDisplay] = useState('home');

  return (
    <DisplayContext.Provider value={[display, setDisplay]}>
      {router[display]}
    </DisplayContext.Provider>
  );
}