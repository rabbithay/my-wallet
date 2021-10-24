import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';
import * as S from './style';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  function signIn(event) {
    event.preventDefault();
    const body = {
      email: userEmail,
      password: userPassword,
    };
    axios.post('http://localhost:4002/login', body).then((res) => {
      setUser(res.data);
      history.push('/home');
    }).catch(() => {
      alert('usuario e/ou senha incorretos');
    });
  }
  return (
    <S.Body>
      <S.Title>MyWallet</S.Title>
      <S.Form onSubmit={() => { signIn(); }}>
        <input
          required
          placeholder="E-mail"
          value={userEmail}
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          required
          placeholder="Senha"
          value={userPassword}
          type="password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </S.Form>
      <Link to="/register">
        <S.GoToRegister>Primeira vez? Cadastre-se!</S.GoToRegister>
      </Link>
    </S.Body>
  );
}
