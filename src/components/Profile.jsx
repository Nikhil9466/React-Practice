import React from 'react'
import UserContext from '../userContext/userContext.js';

function Profile() {
  const { user } = React.useContext(UserContext);
  if (!user) {
    return <div>Please log in to see your profile.</div>;
  } 
  return (
    <div>Profile{user?.username ? `: ${user.username.toUpperCase()}` : ''} </div>
  )
}

export default Profile