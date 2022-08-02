import React, { useContext } from 'react';
import './styles.css';
import { DisplayContext, AccountContext, InputContext } from '../../../contexts';

export function Deposit() {
  const [display, setDisplay] = useContext(DisplayContext);
  const [account, setAccount] = useContext(AccountContext);
  const [input, setInput] = useContext(InputContext);
  
  const handleDeposit = (e) => {
    e.preventDefault();
    
    const amount = +e.target[0].value;

    if (!amount) {
      console.log('wrong input');
      return;
    }

    setAccount((p) => ({
      ...p,
      balance: p.balance + amount
    }));

    console.log('deposited $', amount);
    
    e.target.reset();

    setInput('');
  }

  return (
    <>
      Deposit
      <form onSubmit={handleDeposit}>
        <input value={input} />
        <button>Enter</button>
      </form>
      <button onClick={() => setDisplay('home')}>Back</button>
    </>
  );
}
