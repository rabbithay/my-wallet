import styled from 'styled-components';

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8c11be;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.h1`
    font-family: 'Saira Stencil One';
    color: #fff;
    font-size: 32px;
    margin-bottom: 25px;
`;
export const Form = styled.form`
    width: calc(100vw - 50px);
    font-family: 'Raleway';
    input {
        width: 100%;
        height: 58px;
        border-radius: 5px;
        margin-bottom: 13px;
        border: none;
        padding-left: 15px;
        color: #000;
        font-size: 20px;
        font-weight: 400;
        ::placeholder{
            color: #000;
            font-size: 20px;
            font-weight: 400;
        }
    }
    button {
        width: calc(100vw - 50px);
        height: 48px;
        background-color: #A328D6;
        color: white;
        border-radius: 5px;
        margin-bottom: 36px;
        font-size: 20px;
        font-weight: 700;
    }
`;
export const GoToRegister = styled.p`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    color: white;
`;
