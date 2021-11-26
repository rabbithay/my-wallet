import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BackHomeButton from '../../components/BackHomeButton';

import * as S from './style';
import { createNewIncome } from '../../services/transactionService';
import useAuthConfig from '../../hooks/authConfig';
import handleError from '../../utils/handleError';

export default function NewIncome() {
  const [newValue, setNewValue] = useState();
  const [newDescription, setNewDescription] = useState('');
  const history = useHistory();
  const config = useAuthConfig();

  function newTransaction(event) {
    event.preventDefault();

    const body = {
      value: parseFloat(newValue),
      description: newDescription,
    };
    createNewIncome({ body, config }).then(() => {
      history.push('/home');
    }).catch((error) => {
      handleError(error);
    });
  }
  return (
    <S.Body>
      <S.TopBox>

        <S.Hello>Nova entrada</S.Hello>
        <BackHomeButton />
      </S.TopBox>
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
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button type="submit">Salvar entrada</button>
      </S.Form>
    </S.Body>
  );
}
