import React, { useContext } from 'react';
import { CountContext } from './Task6';

function CompB() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>CompB</h2>
      <button onClick={() => setCount(count < 100 ? count + 10 : count)}>
        Add
      </button>
      <button onClick={() => setCount(count > 0 ? count - 10 : count)}>
        Subtract
      </button>
    </div>
  );
}

export default CompB;
