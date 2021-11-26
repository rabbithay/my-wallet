import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';
import * as S from './style';
import handleError from '../../utils/handleError';

import logo from '../../assets/logo.png';
import { login } from '../../services/userService';

export default function Login() {
  const { userInfo } = useContext(UserContext);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const { setUserInfo } = useContext(UserContext);
  const history = useHistory();

  if (userInfo?.token) {
    history.push('/home');
  }

  function signIn(event) {
    event.preventDefault();

    const body = {
      email: userEmail,
      password: userPassword,
    };

    login(body).then((res) => {
      setUserInfo(res.data);
      history.push('/home');
    }).catch((error) => {
      handleError(error);
    });
  }

  return (
    <S.Body>
      <img src={logo} alt="logo" />
      <S.Title>MyWallet</S.Title>

      <S.Form onSubmit={(event) => { signIn(event); }}>
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
