import styled from 'styled-components';

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e94692;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        height: 150px;
    }
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
    max-width: 500px;
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
        background-color: #fb76b5;
        color: white;
        border-radius: 5px;
        margin-bottom: 36px;
        font-size: 20px;
        font-weight: 700;
        max-width: 500px;

    }
`;

export const GoToLogin = styled.p`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 15px;
    color: white;
`;
