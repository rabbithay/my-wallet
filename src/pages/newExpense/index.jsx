import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

import * as S from './style';

export default function NewExpense() {
  const [newValue, setNewValue] = useState();
  const [newDescription, setNewDescription] = useState('');
  const { user } = useContext(UserContext);
  const history = useHistory();

  function newTransaction(event) {
    event.preventDefault();

    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };
    const body = {
      value: parseFloat(newValue),
      description: newDescription,
    };
    axios.post('http://localhost:4002/expense', body, config).then(() => {
      history.push('/home');
    }).catch(() => {
      alert('desculpe, houve um erro ao salvar a sua transação. por favor, tente novamente');
    });
  }

  return (
    <S.Body>
      <S.Hello>Nova saída</S.Hello>
      <S.Form onSubmit={(e) => { newTransaction(e); }}>
        <input
          required
          placeholder="Valor"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <input
          required
          placeholder="Descrição"
          value={newDescription}
          type="description"
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button type="submit">Salvar saída</button>
      </S.Form>
    </S.Body>
  );
}
