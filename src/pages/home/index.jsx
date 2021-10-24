import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { ImExit } from 'react-icons/im';
import UserContext from '../../contexts/UserContext';
import Transactions from './Transations';

import * as S from './style';

export default function HomePage() {
  const [transactionsList, setTransactionsList] = useState('');
  const { user } = useContext(UserContext);

  const header = {
    authorization: `Bearer ${user.token}`,
  };
  axios.get('http://localhost:4002/home', header).then((req) => {
    setTransactionsList(req.data);
  });

  return (
    <S.Body>
      <S.TopBox>
        <S.Hello>
          Olá,
          {' '}
          {/* {user.user.username} */}
        </S.Hello>
        <S.Exit>
          <ImExit
            color="#fff"
            size="24px"
          />
        </S.Exit>
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

          : <Transactions transactionsList={transactionsList} />}
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
