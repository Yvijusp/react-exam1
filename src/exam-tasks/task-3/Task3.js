import React from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import { FaTwitter } from 'react-icons/fa';
import Button from './components/Button/Button';

const twitter = {
  color: '#1DA1F2',
};

function Task3() {
  return (
    <div>
      <h3>Task 3</h3>
      <Wrapper>
        <FaTwitter size={35} style={twitter} />
        <h1>Happening now</h1>
        <h3>Join Twitter today.</h3>
        <Button className='primary' text='Sign up' />
        <Button text='Log in' />
      </Wrapper>
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
