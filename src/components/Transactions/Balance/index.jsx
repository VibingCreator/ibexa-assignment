import React, { useContext } from 'react';
import './styles.css';
import { DisplayContext, AccountContext } from '../../../contexts';

export function Balance() {
  const [display, setDisplay] = useContext(DisplayContext);
  const [account] = useContext(AccountContext);

  return (
    <>
      Your balance: ${account.balance}
      <button onClick={() => setDisplay('home')}>Back</button>
    </>
  );
}
