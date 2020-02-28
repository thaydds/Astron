import React from 'react';
import './Navbar.scss';

const NavBar = () => {
  return (
    <div className="nav_container">
      <h1 className="nav_container__logo">
        <a href="/">astron</a>
      </h1>
      <ul className="nav_container__routes">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/alunos/adicionar">Adicionar Aluno</a>
        </li>
        <li>
          <a>Sobre</a>
        </li>
        <li>
          <a href="/">Sair</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
