import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './components/Table/Table';
import TableBody from './components/Table/TableBody';

function Task4() {
  // Hooks
  // --state
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // --side effects

  useEffect(() => {
    if (isLoading)
      return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false);
        });
  }, [isLoading]);

  return (
    <div>
      <h3>Task 4</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <TableBody key={user.id} user={user} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
