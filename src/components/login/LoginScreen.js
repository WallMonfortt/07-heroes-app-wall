import React from 'react'

export const LoginScreen = ({ history }) => {

  const handleLogin = () =>{
    history.replace('/');
  }
  return (
    <div className="container mt4">
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      > Login </button>
    </div>
  )
}
