import React from 'react';

const TableBody = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{`${user.address.street}, ${user.address.city}`}</td>
      <td>{user.phone}</td>
      <td>{user.company.name}</td>
    </tr>
  );
};

export default TableBody;
