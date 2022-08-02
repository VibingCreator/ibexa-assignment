import React from 'react';
import './styles.css';

export function Keypad() {
  return (
    <>
      <div className='keypad'>
        <button className='keypad__button'>1</button>
        <button className='keypad__button'>2</button>
        <button className='keypad__button'>3</button>
        <button className='keypad__button'>clear</button>
        <button className='keypad__button'>4</button>
        <button className='keypad__button'>5</button>
        <button className='keypad__button'>6</button>
        <button className='keypad__button'></button>
        <button className='keypad__button'>7</button>
        <button className='keypad__button'>8</button>
        <button className='keypad__button'>9</button>
        <button className='keypad__button'></button>
        <button className='keypad__button'></button>
        <button className='keypad__button'>0</button>
        <button className='keypad__button'></button>
        <button className='keypad__button'></button>
      </div>
    </>
  );
}
