import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

import Perfil from '../pages/Perfil';
import Dashboard from '../pages/Dashboard';

import Comtimer from '../pages/Comtimer';
import Percepcaovisual from '../pages/percepcaovisual';
import Apostila from '../pages/Apostila';
import Autoaceleracao from '../pages/Autoaceleracao';
import Memorizacao from '../pages/Memorizacao';
import Admin from '../pages/Admin';
import Alunos from '../pages/Admin/Alunos';

import Contato from '../pages/Contato';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} isLogado />
      <Route path="/cadastro" component={Cadastro} isLogado />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/comtimer/:id" component={Comtimer} isPrivate />
      <Route
        path="/percepcaovisual/:id"
        component={Percepcaovisual}
        isPrivate
      />
      <Route path="/apostila/:id" component={Apostila} isPrivate />
      <Route path="/autoaceleracao/:id" component={Autoaceleracao} isPrivate />
      <Route path="/memorizacao/:id" component={Memorizacao} isPrivate />
      <Route path="/perfil" component={Perfil} isPrivate />
      <Route path="/admin" exact component={Admin} isPrivate />
      <Route path="/admin/alunos" component={Alunos} isPrivate />
      <Route path="/contato" component={Contato} />
    </Switch>
  );
}
