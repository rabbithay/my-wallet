import React, { useContext } from 'react';
import styled from 'styled-components';
import { ImExit } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import handleError from '../utils/handleError';
import UserContext from '../contexts/UserContext';
import { logout } from '../services/userService';
import useAuthConfig from '../hooks/authConfig';

export default function ExitButton() {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);
  const config = useAuthConfig();

  function handleLogOut() {
    logout(config).then(() => {
      setUserInfo('');
      history.push('/');
    }).catch((error) => {
      handleError(error);
    });
  }

  return (
    <Exit>
      <ImExit
        onClick={() => { handleLogOut(); }}
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
