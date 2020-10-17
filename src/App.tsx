import React from 'react';
import {FiPlayCircle, FiPauseCircle ,FiRefreshCw ,FiStopCircle} from 'react-icons/fi';
import Relogio from './screens/Relogio/Relogio';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <div id="container">
      {/*
      <div className="nav">
        <button type="button">Relogio</button>
        <button type="button">Cronometro</button>
        <button type="button">Temporizador</button>
      </div>
      */}
      <Relogio />
      {/*
      <span>
        <FiPauseCircle size={24} color="#000"/>
      </span>

      <span>
        <FiRefreshCw size={24} color="#000"/>
      </span>

      <span>
        <FiStopCircle size={24} color="#000"/>
      </span>
      */}
    </div>
  );
};

export default App;
