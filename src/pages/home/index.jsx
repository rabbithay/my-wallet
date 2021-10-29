import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import UserContext from '../../contexts/UserContext';
import Transactions from './Transactions';

import * as S from './style';
import useAuthConfig from '../../hooks/authConfig';
import ExitButton from '../../components/ExitButton';
import handleError from '../../hooks/handleError';

export default function HomePage() {
  const [transactionsList, setTransactionsList] = useState('');
  const { userInfo } = useContext(UserContext);
  const config = useAuthConfig();

  useEffect(() => {
    axios.get('http://localhost:4002/home', config).then((res) => {
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
          : <Transactions list={transactionsList} />}
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
