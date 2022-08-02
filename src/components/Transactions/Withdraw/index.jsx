import React, { useContext } from 'react';
import './styles.css';
import { DisplayContext, AccountContext, InputContext } from '../../../contexts';

export function Withdraw() {
  const [display, setDisplay] = useContext(DisplayContext);
  const [account, setAccount] = useContext(AccountContext);
  const [input, setInput] = useContext(InputContext);

  const handleWithdraw = (e) => {
    e.preventDefault();
    
    const amount = +e.target[0].value;

    if (!amount) {
      console.log('wrong input');
      return;
    }

    if (account.balance < amount) {
      console.log('insufficient account balance');
    } else {
      console.log('withdrawn $', amount);

      setAccount((p) => ({
        ...p,
        balance: +p.balance - amount
      }));
    }
    
    setInput('');
  }

  return (
    <>
      Withdraw amount
      <form onSubmit={handleWithdraw}>
        <input value={input} />
        <button>Enter</button>
      </form>
      <button onClick={() => setDisplay('home')}>Back</button>
    </>
  );
}
