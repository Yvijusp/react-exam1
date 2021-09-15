import React, { useContext } from 'react';
import { CountContext } from './Task6';

function CompA1() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h3>CompA1</h3>
      <button onClick={() => setCount(count < 100 ? count + 10 : count)}>
        Add
      </button>
      <button onClick={() => setCount(count > 0 ? count - 10 : count)}>
        Subtract
      </button>
    </div>
  );
}

export default CompA1;
