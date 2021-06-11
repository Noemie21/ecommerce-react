import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function login(event) {
    event.preventDefault();
    fetch('https://api.edu.etherial.dev/api/ecommerce/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem('token', JSON.stringify(data.token));
        dispatch({ type: 'LOGIN', data: data.token });
      });
  }
  return (
    <Row>
      <h1>Se connecter</h1>
      <input
        type="text"
        onChange={event => setEmail(event.target.value)}
      ></input>
      <input
        type="password"
        onChange={event => setPassword(event.target.value)}
      ></input>
      <button type="submit" onClick={login}>
        Login
      </button>

      {console.log(login)}
    </Row>
  );
}
