/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Transaction from './Transaction';

export default function Transactions({ list }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalValue = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].type === 'income') {
        totalValue += list[i].value;
      } else {
        totalValue -= list[i].value;
      }
    }
    setTotal((totalValue / 100).toFixed(2));
  }, [list]);

  return (
    <Body>
      <AllTransactions>
        {list.map((t) => (
          <Transaction
            value={t.value}
            date={t.date}
            description={t.description}
            type={t.type}
          />
        ))}
      </AllTransactions>
      <Total>
        <p>SALDO</p>
        <Result total="total">{total}</Result>
      </Total>
    </Body>
  );
}

const Body = styled.div`
width: 100%;
height: 100%;
    padding: 23px 11px 10px 13px;
`;
const AllTransactions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - 22px);
    p{
        font-size: 16px;
        font-weight: 400;
    }
`;

const Total = styled.div`
    width: 100%;
    height: 22px;
    display: flex;
    justify-content: space-between;
    p{
        text-align: left;
        font-size: 17px;
        color: #000;
        font-weight: 700;
    }
`;
const Result = styled.p`
    text-align: right;
    font-weight: 400 !important;
    color: ${(props) => ((props.total >= 0) ? '#03AC00' : '#C70000')} !important;
`;
