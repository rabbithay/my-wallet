/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

export default function BackHomeButton() {
  const history = useHistory();

  function backHome() {
    history.push('/home');
  }
  return (
    <Home>
      <AiFillHome
        onClick={() => { backHome(); }}
        color="#fff"
        size="24px"
      />
    </Home>
  );
}

export const Home = styled.p`
    color: white;
    font-size: 17px;
    font-weight: 700;    
`;
