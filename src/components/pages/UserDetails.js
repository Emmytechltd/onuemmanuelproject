import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../api/data';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = data.find(user => user.id === Number(id));
    setUser(user);
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
