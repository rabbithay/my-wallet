import styled from 'styled-components';

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e94692;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway';
    padding: 25px;
`;
export const TopBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin-bottom: 22px;
`;
export const Hello = styled.h1`
    font-size: 26px;
    color: white;
    font-weight: 700;
`;
export const Exit = styled.p`
    color: white;
    font-size: 17px;
    font-weight: 700;    
`;
export const RecordsBox = styled.div`
    width: 100%;
    height: calc(100vh - 225px);
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;
`;
export const BottomBox = styled.div`
    height: 114px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const Button = styled.button`
    width: calc((100vw - 65px) / 2);
    height: 100%;
    background-color: #fb76b5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 5px;
    padding: 10px 0px 9px 12px;
    p{
        color: white;
        font-size: 17px;
        font-weight: 700;
        text-align: left;
    }
`;
