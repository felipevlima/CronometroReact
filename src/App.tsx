import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Routing from './routes';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
