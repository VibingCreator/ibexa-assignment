import React, { useState } from 'react';
import { Display } from '../Display';
import { AccountContext } from '../../contexts';

export function Transaction() {
  const [account, setAccount] = useState({ balance: 500 });

  return (
    <>
      <AccountContext.Provider value={[account, setAccount]}>
        <Display />
      </AccountContext.Provider>
    </>
  );
}