import React from 'react';
import React, { useState, useEffect } from 'react';
import data from '../api/data';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <div>
      <h1>User Page</h1>
      <p>Here you can view and manage your user information.</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
