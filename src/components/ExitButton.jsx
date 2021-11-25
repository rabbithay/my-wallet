/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ImExit } from 'react-icons/im';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useAuthConfig from '../hooks/authConfig';
import handleError from '../hooks/handleError';
import UserContext from '../contexts/UserContext';

export default function ExitButton() {
  const history = useHistory();
  const config = useAuthConfig();
  const { setUserInfo } = useContext(UserContext);

  function logOut() {
    axios.post('http://localhost:4002/logout', {}, config).then(() => {
      setUserInfo('');
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
