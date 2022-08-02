import React, { useContext } from 'react';
import './styles.css';
import { InputContext } from '../../contexts';

const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', ''];

export function Keypad() {
  const [input, setInput] = useContext(InputContext);

  return (
    <>
      <div className='keypad'>
        {
          buttons.map((button) => (
            <button 
              className='keypad__button'
              onClick={() => setInput((p) => p + button)}
            >
              {button}
            </button>
          ))
        }
        <div className='keypad__action'>
          <button onClick={() => setInput('')}>Clear</button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </>
  );
}
