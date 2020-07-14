import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

import { cadastroRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatório!'),
  email: Yup.string().email('E=mail inválido!').required('Campo obrigatório!'),
  cpf: Yup.string('Digite apenas números.')
    .min(11, 'Mínimo 11 caracteres.')
    .required('Campo obrigatório!'),
});

export default function Cadastro() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, cpf }) {
    const admin = false;

    dispatch(cadastroRequest(nome, email, cpf, admin));
  }

  return (
    <>
      <img src={logo} alt="Methodus - Leitura Dinâmica e Memorização" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="cpf" placeholder="Seu CPF" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
