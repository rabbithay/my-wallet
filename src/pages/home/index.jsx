import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import UserContext from '../../contexts/UserContext';
import TransactionList from '../../components/TransactionList';

import * as S from './style';
import ExitButton from '../../components/ExitButton';
import handleError from '../../utils/handleError';
import { getTransactions } from '../../services/transactionService';
import useAuthConfig from '../../hooks/authConfig';

export default function HomePage() {
  const [transactionsList, setTransactionsList] = useState('');
  const { userInfo } = useContext(UserContext);
  const config = useAuthConfig();

  useEffect(() => {
    getTransactions(config).then((res) => {
      setTransactionsList(res.data);
    }).catch((error) => {
      handleError(error);
    });
  }, []);

  return (
    <S.Body>
      <S.TopBox>
        <S.Hello>
          {`Olá ${userInfo.name}`}
        </S.Hello>
        <ExitButton />
      </S.TopBox>
      <S.RecordsBox>
        {(!transactionsList.length)
          ? (
            <p>
              Não há registros de
              <br />
              {' '}
              entrada ou saída
            </p>
          )
          : <TransactionList list={transactionsList} />}
        {' '}
      </S.RecordsBox>
      <S.BottomBox>
        <Link to="/new-income">
          <S.Button>
            <AiOutlinePlusCircle
              color="#fff"
              size="22px"
            />
            <p>
              Nova
              {' '}
              <br />
              {' '}
              entrada
            </p>
          </S.Button>
        </Link>
        <Link to="/new-expense">
          <S.Button>
            <AiOutlineMinusCircle
              color="#fff"
              size="22px"
            />
            <p>
              Nova
              {' '}
              <br />
              {' '}
              saída
            </p>
          </S.Button>
        </Link>
      </S.BottomBox>
    </S.Body>
  );
}
