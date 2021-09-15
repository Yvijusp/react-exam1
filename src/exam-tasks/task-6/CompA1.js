import React, { useContext } from 'react';
import { CountContext } from './Task6';

function CompA1() {
  const { count, setCount, setMessage } = useContext(CountContext);

  return (
    <div>
      <h3>CompA1</h3>
      <button
        onClick={() => {
          setMessage('');
          count < 100
            ? setCount(count + 10)
            : setMessage("Reached limit of 100, can't increase anymore");
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setMessage('');
          count > 0
            ? setCount(count - 10)
            : setMessage("Can't go lower than 0");
        }}
      >
        Subtract
      </button>
    </div>
  );
}

export default CompA1;
