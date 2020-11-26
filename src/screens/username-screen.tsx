import React from 'react'

const UsernameScreen: React.FC<any> = ({ username }) => {
  return (
    <div>
      <h1>Username screen</h1>
      <h2>Username: {username}</h2>
    </div>
  );
}

export default UsernameScreen;
