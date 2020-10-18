import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimerBox = styled.div`
  display: flex;
  align-items: center;
  letter-spacing: 2px;

  span {
    font-size: 80px;
  }

  p {
    font-size: 80px;
  }
`;

export const ButtonsCotainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  button + button {
    margin-left: 10px;
  }

  button {
    background: #fefefe;
    border: 1px solid #ddd;
    padding: 10px 25px;
    border-radius: 5px;
    cursor: pointer;
  }
`;


