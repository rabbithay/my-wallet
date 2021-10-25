/* eslint-disable react/prop-types */
import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';

export default function Transaction({
  date, description, value, type,
}) {
  return (
    <Cell>
      <Date><p>{dayjs(date).format('DD/MM')}</p></Date>
      <Description><p>{description}</p></Description>
      <Price type={type}><p>{(value / 100).toFixed(2)}</p></Price>
    </Cell>
  );
}

const Cell = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
`;
const Date = styled.div`
    width: 50px;
    height: 100%;
    p {
        color: #C6C6C6;
        text-align: left;
    }
`;
const Description = styled.div`
    width: calc(100% - 130px);
    height: 100%;
    p{
        color: #000000;
        text-align: left;
    }
`;
const Price = styled.div`
    width: 80px;
    height: 100%;
    p{
        color: ${(props) => ((props.type === 'income') ? '#03AC00' : '#C70000')};
        text-align: right;
    }
`;
