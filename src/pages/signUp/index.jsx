/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import * as S from './styles';

export default function Register() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');

  const history = useHistory();

  function signUp(event) {
    console.log('1');
    event.preventDefault();
    console.log('2');
    const body = {
      email: userEmail,
      name: userName,
      password: userPassword,
      repeatPassword: userConfirmPassword,
    };
    if (userPassword !== userConfirmPassword) {
      alert('As senhas não correspondem.');
      return;
    }
    console.log('3');
    axios.post('http://localhost:4002/register', body).then(() => {
      history.push('/login');
    }).catch((e) => {
      console.log(e);
    });
    setUserName('');
    setUserEmail('');
    setUserPassword('');
    setUserConfirmPassword('');
  }

  return (
    <S.Body>
      <S.Title>MyWallet</S.Title>
      <S.Form onSubmit={signUp}>
        <input
          required
          placeholder="Nome"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
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
        <input
          required
          placeholder="Confirme a senha"
          value={userConfirmPassword}
          type="password"
          onChange={(e) => setUserConfirmPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </S.Form>
      <Link to="/login">
        <S.GoToLogin>Já tem uma conta? Entre agora!</S.GoToLogin>
      </Link>
    </S.Body>
  );
}
