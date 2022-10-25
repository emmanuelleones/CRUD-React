import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Registro} from './Registo.js';
import {Consulta} from './Consulta.js';
import {Modificar} from './Modificar.js';
import {Eliminar} from './Eliminar.js';

// import { render } from 'react-dom';


const App = () => { // ESTO ES UN COMPONENTE
  return (
    <React.Fragment>
      <Registro />
      <Consulta/>
      <Modificar/>
      <Eliminar/>
    </React.Fragment>
    );
  }
export default App;