import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Pages } from './Header.styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <div>
          <nav>
            <h1>Faculdade</h1>
          </nav>
          <Pages>
            <NavLink to="/">Horarios</NavLink>
            <NavLink to="/cronometro">Cronometro</NavLink>
            <NavLink to="/timer">Timer</NavLink>
          </Pages>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
