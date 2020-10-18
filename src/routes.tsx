import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cronometro from './screens/Cronometro/Cronometro';
// import Temporizador from 'screens/Temporizador/Temporizador';
import Relogio from './screens/Relogio/Relogio';

const Routing = () => {
  return(
    <>
      <Switch>
        <Route exact path="/" component={Relogio}/>
        <Route path="/cronometro" component={Cronometro} />
        {/* <Route path="/timer" component={Temporizador} /> */}
      </Switch>
    </>
  )
}

export default Routing;
