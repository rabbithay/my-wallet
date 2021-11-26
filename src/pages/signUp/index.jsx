/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import * as S from './styles';
import handleError from '../../utils/handleError';

import logo from '../../assets/logo.png';
import { register } from '../../services/userService';

export default function Register() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');

  const history = useHistory();

  function signUp(event) {
    event.preventDefault();
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
    register(body).then(() => {
      history.push('/');
      setUserName('');
      setUserEmail('');
      setUserPassword('');
      setUserConfirmPassword('');
    }).catch((error) => {
      console.log(error);
      handleError(error);
    });
  }

  return (
    <S.Body>
      <img src={logo} alt="logo" />

      <S.Title>MyWallet</S.Title>
      <S.Form onSubmit={(e) => { signUp(e); }}>
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
      <Link to="/">
        <S.GoToLogin>Já tem uma conta? Entre agora!</S.GoToLogin>
      </Link>
    </S.Body>
  );
}
