import styled from 'styled-components';

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e94692;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 25px;
    font-family: 'Raleway';

`;
export const Hello = styled.h1`
    font-size: 26px;
    color: white;
    font-weight: 700;
    text-align: left;
    width: 100%;
    margin-bottom: 40px;
`;
export const Form = styled.form`
    width: calc(100vw - 50px);
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
    }
`;
