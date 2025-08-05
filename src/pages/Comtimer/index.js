import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Barra from '~/components/Barra';
import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import { Container, Prod, Strong } from './styles';
import api from '~/services/api';

import beep from '~/assets/beep.mp3';
import reiniciar from '~/assets/reiniciar.png';
import icoConcluido from '~/assets/ico-concluido.jpg';

import * as cronos from '~/assets/cronometro';

export default function Comtimer(props) {
  const [exercicio, setExercicio] = useState();
  const [minimo, setMinimo] = useState();
  const [maximo, setMaximo] = useState();
  const [contador, setContador] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);

  const isMountedRef = useRef(null);
  const beepAudio = useRef(null);

  const id = parseInt(props.match.params.id);
  const exercicio_id = id;

  const dispatch = useDispatch();
  const resp = useSelector((state) => state.usuario);

  useEffect(() => {
    beepAudio.current = new Audio(beep);
    beepAudio.current.load();
  }, []);

  async function loadResposta() {
    try {
      await api.post('resposta', {
        resposta: 0,
        prova_id: prova.id,
        exercicio_id,
      });

      const response = await api.get(`provas`);
      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      dispatch(updateRespostaRequest(exercicio_id));
    } catch (error) {
      console.tron.log('O exercício já foi concluído!');
    }
  }

  function loadNumeros(min, max) {
    setMinimo(min);
    setMaximo(max);
  }

  function loadNumCont() {
    const valores = {
      178: [5, 8],
      179: [5, 12],
      180: [10, 15],
      181: [10, 15],
      182: [10, 15],
      183: [10, 12],
      184: [8, 12],
      185: [3, 5],
    };

    if (valores[id]) {
      const [min, max] = valores[id];
      loadNumeros(min, max);
      setContador(max);
    }
  }

  function loadContador(maxi, mini) {
    let i = maxi;
    let max = maxi;

    let inicioContador = 0;
    let fimContador = {
      178: 5,
      179: 5,
      180: 10,
      181: 10,
      182: 10,
      183: 10,
      184: 8,
      185: 5,
    }[exercicio_id] || 0;

    // Mostra o número inicial imediatamente
    setContador(i);

    const interval = setInterval(() => {
      if (!isMountedRef.current) return clearInterval(interval);

      i -= 1;

      if (i === 0 && beepAudio.current) {
        beepAudio.current.play().catch((err) =>
          console.log('Erro ao tocar áudio:', err)
        );
      }

      if (i < 0) {
        if (max < mini) {
          if (isMountedRef.current) loadResposta();
          isMountedRef.current = false;
          loadNumCont();
          iniciar();
          return clearInterval(interval);
        }

        i = max;
        setContador(i);
        inicioContador += 1;
        if (inicioContador === fimContador) {
          fimContador += 1;
          max -= 1;
          inicioContador = 0;
        }
      } else {
        setContador(i);
      }
    }, 1000);
  }

  function iniciar() {
    // Desbloqueia o áudio no primeiro clique
    if (beepAudio.current) {
      beepAudio.current.play().then(() => {
        beepAudio.current.pause();
        beepAudio.current.currentTime = 0;
      });
    }

    setIniciado(true);
    isMountedRef.current = true;
    loadContador(maximo, minimo);
  }

  function parar() {
    setIniciado(false);
    isMountedRef.current = false;
  }

  useEffect(() => {
    async function loadProva() {
      const response = await api.get(`provas`);
      setProva(response.data);
      dispatch(updateProvaRequest(response.data));
      const prova_id = response.data.id;

      const respostaExiste = await api.get(
        `respostaid?prova_id=${prova_id}&exercicio_id=${exercicio_id}`
      );

      if (respostaExiste.data) {
        setConcluido(true);
        const re = resp.resposta.filter((r) => r === exercicio_id);
        if (!re) dispatch(updateRespostaRequest(exercicio_id));
      }
    }

    setExercicio(id);
    isMountedRef.current = true;
    loadProva();
    loadNumCont();

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const imagens = {
    1: cronos.c1,
    2: cronos.c2,
    3: cronos.c3,
    4: cronos.c4,
    5: cronos.c5,
    6: cronos.c6,
    7: cronos.c7,
    8: cronos.c8,
    9: cronos.c9,
    10: cronos.c10,
    11: cronos.c11,
    12: cronos.c12,
    13: cronos.c13,
    14: cronos.c14,
    15: cronos.c15,
    16: cronos.c16,
    17: cronos.c17,
    18: cronos.c18,
    19: cronos.c19,
    20: cronos.c20,
    21: cronos.c21,
    22: cronos.c22,
    23: cronos.c23,
    24: cronos.c24,
    25: cronos.c25,
    26: cronos.c26,
    27: cronos.c27,
    28: cronos.c28,
    29: cronos.c29,
    30: cronos.c30,
    31: cronos.c31,
    32: cronos.c32,
    33: cronos.c33,
    34: cronos.c34,
    35: cronos.c35,
    36: cronos.c36,
    37: cronos.c37,
    38: cronos.c38,
    39: cronos.c39,
    40: cronos.c40,
    41: cronos.c41,
    42: cronos.c42,
    43: cronos.c43,
    44: cronos.c44,
    45: cronos.c45,
  };

  return (
    <Container>
      <Barra
        categoria="Leitura Dinâmica"
        modulo="Exercícios apostila"
        tipo="Com timer"
        exercicio={exercicio}
        nota={prova && prova.nota}
      />
      <Prod>
        <div>
          <h1>Com timer: {`${maximo}" - ${minimo}"`}</h1>
          <strong>
            {imagens[contador] && (
              <img src={imagens[contador]} alt="Cronômetro" />
            )}
          </strong>
        </div>
        <div>
          <span>{contador}</span>
          {!iniciado && isMountedRef.current && (
            <button onClick={() => iniciar()}>Iniciar</button>
          )}
          {!iniciado && !isMountedRef.current && (
            <button onClick={() => iniciar()}>
              <img src={reiniciar} alt="Reiniciar" />
            </button>
          )}
          {iniciado && <button onClick={() => parar()}>Parar</button>}
          {concluido && (
            <Strong>
              Concluído <img src={icoConcluido} alt="Exercício concluído" />
            </Strong>
          )}
          {!concluido && (
            <small>
              *A nota será contabilizada após a conclusão do exercício.
            </small>
          )}
          {concluido && (
            <small>*A nota deste exercício já foi contabilizada.</small>
          )}
        </div>
      </Prod>
    </Container>
  );
}
