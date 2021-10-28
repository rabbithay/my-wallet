/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ImExit } from 'react-icons/im';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useAuthConfig from '../hooks/authConfig';
import handleError from '../hooks/handleError';

export default function ExitButton() {
  const history = useHistory();
  const config = useAuthConfig();

  function logOut() {
    axios.post('http://localhost:4002/exit', {}, config).then(() => {
      history.push('/');
    }).catch((error) => {
      handleError(error);
    });
  }
  return (
    <Exit>
      <ImExit
        onClick={() => { logOut(); }}
        color="#fff"
        size="24px"
      />
    </Exit>
  );
}

export const Exit = styled.p`
    color: white;
    font-size: 17px;
    font-weight: 700;    
`;
