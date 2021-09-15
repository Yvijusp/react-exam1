import React, { useContext } from 'react';
import { CountContext } from './Task6';

function CompA1() {
  const { count, setCount, setMessage } = useContext(CountContext);

  return (
    <div>
      <h3>CompA1</h3>
      <button
        onClick={() => {
          setCount(
            count < 100
              ? count + 10
              : setMessage("Reached limit of 100, can't increase anymore")
          );
        }}
      >
        Add
      </button>
      <button
        onClick={() =>
          setCount(count > 0 ? count - 10 : setMessage("Can't lower below 0 "))
        }
      >
        Subtract
      </button>
    </div>
  );
}

export default CompA1;
