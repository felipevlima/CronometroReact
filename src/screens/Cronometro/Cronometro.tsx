import React, { useState, useEffect } from 'react';

import { Container, TimerBox } from './Cronometro.styles';

import { handleTime, Control } from './CalculaTempo';

const Cronometro: React.FC = () => {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<Array<number|string>>([]);



  useEffect(() => {
    const timeArray: Array<number|string> = handleTime(timeInSeconds);
    setTimer(timeArray);
  }, [timeInSeconds]);

  return (
    <Container>
      <TimerBox>
        <p>{timer[0]}</p>
        <span>:</span>
        <p>{timer[1]}</p>
        <span>:</span>
        <p>{timer[2]}</p>
      </TimerBox>
      <Control setTimeInSeconds={setTimeInSeconds}/>
    </Container>
  );
}

export default Cronometro;
