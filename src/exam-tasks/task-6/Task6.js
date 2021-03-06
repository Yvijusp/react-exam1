import React, { useState } from 'react';
import CompA from './CompA';
import CompB from './CompB';

export const CountContext = React.createContext();

function Task6() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  return (
    <div>
      <h3>Task 6</h3>
      <h2>Count: {count}</h2>
      {message && <p>{message}</p>}
      <CountContext.Provider value={{ count, setCount, setMessage }}>
        <CompA />
        <CompB />
      </CountContext.Provider>
    </div>
  );
}

export default Task6;

/* Task 6
task-8 aplanke rasite kelis komponetus. Task8 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task8 komponentų medis
- CompA
-- CompA1
- CompB

Task8 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/
