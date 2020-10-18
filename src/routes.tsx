import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cronometro from 'screens/Cronometro/Cronometro';
import Timer from 'screens/Temporizador/Temporizador';
import Relogio from './screens/Relogio/Relogio';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Relogio}/>
        <Route path="/cronometro" component={Cronometro} />
        <Route path="/timer" component={Timer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
