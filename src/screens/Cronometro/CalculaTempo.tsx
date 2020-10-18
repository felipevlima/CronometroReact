/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { ButtonsCotainer } from './Cronometro.styles';

type Props = {
  setTimeInSeconds: Function;
}

export function handleTime(timeInSeconds: number): Array<number|string> {
  const horas: number = Math.floor(timeInSeconds / 3600);
  const minutos: number = Math.floor((timeInSeconds - (horas * 3600)) / 60);
  const segundos: number = timeInSeconds - (horas * 3600) - (minutos * 60);
  const centesimos: number = Math.floor(timeInSeconds * 100);

  const hora = horas < 10 ? `0${horas}` : horas;
  const minuto = minutos < 10 ? `0${minutos}` : minutos;
  const segundo = segundos < 10 ? `0${segundos}` : segundos;
  const centesimo = centesimos < 10 ? `0${centesimos}` : centesimos;

  return [
    hora,
    minuto,
    segundo,
    centesimo
  ];
}

export function Control(props: Props) {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);

  const run = () => {
    const interval = setInterval(() => {
      setTimeInSeconds((previousState:number) => previousState + 1)
    }, 1000);

    setIntervalId(interval);
  }

  const stop = () => {
    clearInterval(intervalId);
  }

  const reset = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
  }

  return (
    <ButtonsCotainer>
      <button onClick={run}>Run</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </ButtonsCotainer>
  );
};
