import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = () => {

  const navigation = useNavigate();

  return (
    <div className="user">
      <button onClick={() => navigation("/about")}>Click Me</button>
    </div>
  )
}

export default User
