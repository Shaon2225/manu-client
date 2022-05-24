import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const UserProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
  return (
    <div>Hello {user.displayName}</div>
  )
}

export default UserProfile