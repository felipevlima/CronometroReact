import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: center;
  align-items: center;

  .button {
    margin: 5px;
    border: none;
    background-color: #c8c9c7;
    border-radius: 2px;
    padding: 3px 10px;
    font-size: 3px;
    cursor: pointer;
  }
`;

export const TimerBox = styled.div`
  display: flex;
  letter-spacing: 2px;

  .span {
    position: relative;
    top: 3px;
    font-size: 15px;
  }

  .p {
    margin: 0;
    font-size: 20px;
  }
`;


