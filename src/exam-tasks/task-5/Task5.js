import React, { useRef } from 'react';

function Task5() {
  const bgRef = useRef();

  const lightClickHandler = () => {
    bgRef.current.style.backgroundColor = '#f1f1f1';
    bgRef.current.style.color = '#000000';
  };
  const darkClickHandler = () => {
    bgRef.current.style.backgroundColor = '#000000';
    bgRef.current.style.color = '#f1f1f1';
  };

  return (
    <div ref={bgRef}>
      <h3>Task 5</h3>

      <h1>Lorem</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laborum
        mollitia quas corporis omnis dignissimos beatae dolore velit vel
        consequatur. Aliquid placeat deserunt itaque tempora veniam inventore
        accusamus expedita autem?
      </p>
      <button onClick={lightClickHandler}>Light theme</button>
      <button onClick={darkClickHandler}>Dark theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #000000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
