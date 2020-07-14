import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Barra from '~/components/Barra';

import {
  updateProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import { Container, Prod, Strong } from './styles';

import api from '~/services/api';

import c100 from '~/assets/memorizacao/4/100.jpg';
import c99 from '~/assets/memorizacao/4/99.jpg';
import c98 from '~/assets/memorizacao/4/98.jpg';
import c97 from '~/assets/memorizacao/4/97.jpg';
import c96 from '~/assets/memorizacao/4/96.jpg';
import c95 from '~/assets/memorizacao/4/95.jpg';
import c94 from '~/assets/memorizacao/4/94.jpg';
import c93 from '~/assets/memorizacao/4/93.jpg';
import c92 from '~/assets/memorizacao/4/92.jpg';
import c91 from '~/assets/memorizacao/4/91.jpg';
import c90 from '~/assets/memorizacao/3/90.jpg';
import c89 from '~/assets/memorizacao/3/89.jpg';
import c88 from '~/assets/memorizacao/3/88.jpg';
import c87 from '~/assets/memorizacao/3/87.jpg';
import c86 from '~/assets/memorizacao/3/86.jpg';
import c85 from '~/assets/memorizacao/3/85.jpg';
import c84 from '~/assets/memorizacao/3/84.jpg';
import c83 from '~/assets/memorizacao/3/83.jpg';
import c82 from '~/assets/memorizacao/3/82.jpg';
import c81 from '~/assets/memorizacao/3/81.jpg';
import c80 from '~/assets/memorizacao/3/80.jpg';
import c79 from '~/assets/memorizacao/3/79.jpg';
import c78 from '~/assets/memorizacao/3/78.jpg';
import c77 from '~/assets/memorizacao/3/77.jpg';
import c76 from '~/assets/memorizacao/3/76.jpg';
import c75 from '~/assets/memorizacao/3/75.jpg';
import c74 from '~/assets/memorizacao/3/74.jpg';
import c73 from '~/assets/memorizacao/3/73.jpg';
import c72 from '~/assets/memorizacao/3/72.jpg';
import c71 from '~/assets/memorizacao/3/71.jpg';
import c70 from '~/assets/memorizacao/3/70.jpg';
import c69 from '~/assets/memorizacao/3/69.jpg';
import c68 from '~/assets/memorizacao/3/68.jpg';
import c67 from '~/assets/memorizacao/3/67.jpg';
import c66 from '~/assets/memorizacao/3/66.jpg';
import c65 from '~/assets/memorizacao/3/65.jpg';
import c64 from '~/assets/memorizacao/3/64.jpg';
import c63 from '~/assets/memorizacao/3/63.jpg';
import c62 from '~/assets/memorizacao/3/62.jpg';
import c61 from '~/assets/memorizacao/3/61.jpg';
import c60 from '~/assets/memorizacao/2/60.jpg';
import c59 from '~/assets/memorizacao/2/59.jpg';
import c58 from '~/assets/memorizacao/2/58.jpg';
import c57 from '~/assets/memorizacao/2/57.jpg';
import c56 from '~/assets/memorizacao/2/56.jpg';
import c55 from '~/assets/memorizacao/2/55.jpg';
import c54 from '~/assets/memorizacao/2/54.jpg';
import c53 from '~/assets/memorizacao/2/53.jpg';
import c52 from '~/assets/memorizacao/2/52.jpg';
import c51 from '~/assets/memorizacao/2/51.jpg';
import c50 from '~/assets/memorizacao/2/50.jpg';
import c49 from '~/assets/memorizacao/2/49.jpg';
import c48 from '~/assets/memorizacao/2/48.jpg';
import c47 from '~/assets/memorizacao/2/47.jpg';
import c46 from '~/assets/memorizacao/2/46.jpg';
import c45 from '~/assets/memorizacao/2/45.jpg';
import c44 from '~/assets/memorizacao/2/44.jpg';
import c43 from '~/assets/memorizacao/2/43.jpg';
import c42 from '~/assets/memorizacao/2/42.jpg';
import c41 from '~/assets/memorizacao/2/41.jpg';
import c40 from '~/assets/memorizacao/2/40.jpg';
import c39 from '~/assets/memorizacao/2/39.jpg';
import c38 from '~/assets/memorizacao/2/38.jpg';
import c37 from '~/assets/memorizacao/2/37.jpg';
import c36 from '~/assets/memorizacao/2/36.jpg';
import c35 from '~/assets/memorizacao/2/35.jpg';
import c34 from '~/assets/memorizacao/2/34.jpg';
import c33 from '~/assets/memorizacao/2/33.jpg';
import c32 from '~/assets/memorizacao/2/32.jpg';
import c31 from '~/assets/memorizacao/2/31.jpg';
import c30 from '~/assets/memorizacao/1/30.jpg';
import c29 from '~/assets/memorizacao/1/29.jpg';
import c28 from '~/assets/memorizacao/1/28.jpg';
import c27 from '~/assets/memorizacao/1/27.jpg';
import c26 from '~/assets/memorizacao/1/26.jpg';
import c25 from '~/assets/memorizacao/1/25.jpg';
import c24 from '~/assets/memorizacao/1/24.jpg';
import c23 from '~/assets/memorizacao/1/23.jpg';
import c22 from '~/assets/memorizacao/1/22.jpg';
import c21 from '~/assets/memorizacao/1/21.jpg';
import c20 from '~/assets/memorizacao/1/20.jpg';
import c19 from '~/assets/memorizacao/1/19.jpg';
import c18 from '~/assets/memorizacao/1/18.jpg';
import c17 from '~/assets/memorizacao/1/17.jpg';
import c16 from '~/assets/memorizacao/1/16.jpg';
import c15 from '~/assets/memorizacao/1/15.jpg';
import c14 from '~/assets/memorizacao/1/14.jpg';
import c13 from '~/assets/memorizacao/1/13.jpg';
import c12 from '~/assets/memorizacao/1/12.jpg';
import c11 from '~/assets/memorizacao/1/11.jpg';
import c10 from '~/assets/memorizacao/1/10.jpg';
import c9 from '~/assets/memorizacao/1/09.jpg';
import c8 from '~/assets/memorizacao/1/08.jpg';
import c7 from '~/assets/memorizacao/1/07.jpg';
import c6 from '~/assets/memorizacao/1/06.jpg';
import c5 from '~/assets/memorizacao/1/05.jpg';
import c4 from '~/assets/memorizacao/1/04.jpg';
import c3 from '~/assets/memorizacao/1/03.jpg';
import c2 from '~/assets/memorizacao/1/02.jpg';
import c1 from '~/assets/memorizacao/1/01.jpg';

import icoConcluido from '~/assets/ico-concluido.jpg';
import reiniciar from '~/assets/reiniciar.png';

export default function Memorizacao(props) {
  const [exercicio, setExercicio] = useState();
  const [minimo, setMinimo] = useState();
  const [maximo, setMaximo] = useState();
  const [contador, setContador] = useState(0);
  const [iniciado, setIniciado] = useState(false);
  const [prova, setProva] = useState();
  const [concluido, setConcluido] = useState(false);
  const [respostas, setRespostas] = useState();
  const [sequencia, setSequencia] = useState(1);

  const isMountedRef = useRef(null);

  const id = parseInt(props.match.params.id);

  const exercicio_id = id;

  const dispatch = useDispatch();

  const resp = useSelector((state) => state.usuario);

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

      toast.success('Exercício concluído com sucesso!');
    } catch (error) {
      console.tron.log('O exercício já foi concluído!');
    }
  }

  function loadContador(maxi, mini) {
    let i = mini;
    let max = maxi;
    let seq = sequencia;
    const interval = setInterval(() => {
      if (i > max) {
        seq += 1;
        setSequencia(seq);
        i = mini - 1;
        setContador(i);
        max -= 1;
        if (seq > 3) {
          if (isMountedRef.current) loadResposta();
          setConcluido(true);
          isMountedRef.current = false;
          setIniciado(false);
          return clearInterval(interval);
        }
      }

      if (!isMountedRef.current) return clearInterval(interval);
      setContador(i);
      i += 1;
    }, 1326);
  }

  function iniciar() {
    setIniciado(true);
    isMountedRef.current = true;
    loadContador(maximo, minimo);
  }

  function parar() {
    setIniciado(false);
    isMountedRef.current = false;
  }

  useEffect(() => {
    async function loadRespostas() {
      setRespostas(resp.resposta);
    }

    loadRespostas();
  }, [resp.resposta]);

  useEffect(() => {
    isMountedRef.current = true;

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

    function loadExercicio() {
      setExercicio(id);
    }

    function loadNumeros(min, max) {
      setMinimo(min);
      setMaximo(max);
    }

    if (isMountedRef.current) loadProva();
    loadExercicio();

    if (id === 328) {
      loadNumeros(1, 30);
      setContador(30);
    }
    if (id === 329) {
      loadNumeros(31, 60);
      setContador(60);
    }
    if (id === 330) {
      loadNumeros(61, 90);
      setContador(90);
    }
    if (id === 331) {
      loadNumeros(91, 100);
      setContador(100);
    }

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <Container>
      <Barra
        categoria="Memória"
        modulo="Código alfa-numérico"
        tipo="Repasses"
        exercicio={exercicio}
        nota={prova && prova.nota}
      />
      <Prod>
        <div>
          <h1>
            Repasses: {minimo} - {maximo}
          </h1>
          <strong>
            {contador === 1 && (sequencia === 1 || sequencia === 2) && (
              <img src={c11} alt="Cronômetro" />
            )}
            {contador === 2 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c19} alt="Cronômetro" />
              )}
            {contador === 3 && (sequencia === 1 || sequencia === 2) && (
              <img src={c1} alt="Cronômetro" />
            )}
            {contador === 4 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c24} alt="Cronômetro" />
              )}
            {contador === 5 && (sequencia === 1 || sequencia === 2) && (
              <img src={c2} alt="Cronômetro" />
            )}
            {contador === 6 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c15} alt="Cronômetro" />
              )}
            {contador === 7 && (sequencia === 1 || sequencia === 2) && (
              <img src={c3} alt="Cronômetro" />
            )}
            {contador === 8 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c29} alt="Cronômetro" />
              )}
            {contador === 9 && (sequencia === 1 || sequencia === 2) && (
              <img src={c13} alt="Cronômetro" />
            )}
            {contador === 10 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c22} alt="Cronômetro" />
              )}
            {contador === 11 && (sequencia === 1 || sequencia === 2) && (
              <img src={c8} alt="Cronômetro" />
            )}
            {contador === 12 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c26} alt="Cronômetro" />
              )}
            {contador === 13 && (sequencia === 1 || sequencia === 2) && (
              <img src={c17} alt="Cronômetro" />
            )}
            {contador === 14 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c27} alt="Cronômetro" />
              )}
            {contador === 15 && (sequencia === 1 || sequencia === 2) && (
              <img src={c6} alt="Cronômetro" />
            )}
            {contador === 16 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c14} alt="Cronômetro" />
              )}
            {contador === 17 && (sequencia === 1 || sequencia === 2) && (
              <img src={c4} alt="Cronômetro" />
            )}
            {contador === 18 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c20} alt="Cronômetro" />
              )}
            {contador === 19 && (sequencia === 1 || sequencia === 2) && (
              <img src={c9} alt="Cronômetro" />
            )}
            {contador === 20 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c16} alt="Cronômetro" />
              )}
            {contador === 21 && (sequencia === 1 || sequencia === 2) && (
              <img src={c23} alt="Cronômetro" />
            )}
            {contador === 22 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c7} alt="Cronômetro" />
              )}
            {contador === 23 && (sequencia === 1 || sequencia === 2) && (
              <img src={c18} alt="Cronômetro" />
            )}
            {contador === 24 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c10} alt="Cronômetro" />
              )}
            {contador === 25 && (sequencia === 1 || sequencia === 2) && (
              <img src={c5} alt="Cronômetro" />
            )}
            {contador === 26 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c28} alt="Cronômetro" />
              )}
            {contador === 27 && (sequencia === 1 || sequencia === 2) && (
              <img src={c12} alt="Cronômetro" />
            )}
            {contador === 28 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c30} alt="Cronômetro" />
              )}
            {contador === 29 && (sequencia === 1 || sequencia === 2) && (
              <img src={c21} alt="Cronômetro" />
            )}
            {contador === 30 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c25} alt="Cronômetro" />
              )}

            {contador === 31 && (sequencia === 1 || sequencia === 2) && (
              <img src={c34} alt="Cronômetro" />
            )}
            {contador === 32 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c32} alt="Cronômetro" />
              )}
            {contador === 33 && (sequencia === 1 || sequencia === 2) && (
              <img src={c51} alt="Cronômetro" />
            )}
            {contador === 34 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c41} alt="Cronômetro" />
              )}
            {contador === 35 && (sequencia === 1 || sequencia === 2) && (
              <img src={c37} alt="Cronômetro" />
            )}
            {contador === 36 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c58} alt="Cronômetro" />
              )}
            {contador === 37 && (sequencia === 1 || sequencia === 2) && (
              <img src={c47} alt="Cronômetro" />
            )}
            {contador === 38 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c50} alt="Cronômetro" />
              )}
            {contador === 39 && (sequencia === 1 || sequencia === 2) && (
              <img src={c54} alt="Cronômetro" />
            )}
            {contador === 40 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c35} alt="Cronômetro" />
              )}
            {contador === 41 && (sequencia === 1 || sequencia === 2) && (
              <img src={c48} alt="Cronômetro" />
            )}
            {contador === 42 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c44} alt="Cronômetro" />
              )}
            {contador === 43 && (sequencia === 1 || sequencia === 2) && (
              <img src={c56} alt="Cronômetro" />
            )}
            {contador === 44 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c39} alt="Cronômetro" />
              )}
            {contador === 45 && (sequencia === 1 || sequencia === 2) && (
              <img src={c59} alt="Cronômetro" />
            )}
            {contador === 46 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c45} alt="Cronômetro" />
              )}
            {contador === 47 && (sequencia === 1 || sequencia === 2) && (
              <img src={c53} alt="Cronômetro" />
            )}
            {contador === 48 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c36} alt="Cronômetro" />
              )}
            {contador === 49 && (sequencia === 1 || sequencia === 2) && (
              <img src={c40} alt="Cronômetro" />
            )}
            {contador === 50 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c60} alt="Cronômetro" />
              )}
            {contador === 51 && (sequencia === 1 || sequencia === 2) && (
              <img src={c31} alt="Cronômetro" />
            )}
            {contador === 52 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c42} alt="Cronômetro" />
              )}
            {contador === 53 && (sequencia === 1 || sequencia === 2) && (
              <img src={c57} alt="Cronômetro" />
            )}
            {contador === 54 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c49} alt="Cronômetro" />
              )}
            {contador === 55 && (sequencia === 1 || sequencia === 2) && (
              <img src={c55} alt="Cronômetro" />
            )}
            {contador === 56 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c38} alt="Cronômetro" />
              )}
            {contador === 57 && (sequencia === 1 || sequencia === 2) && (
              <img src={c43} alt="Cronômetro" />
            )}
            {contador === 58 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c52} alt="Cronômetro" />
              )}
            {contador === 59 && (sequencia === 1 || sequencia === 2) && (
              <img src={c33} alt="Cronômetro" />
            )}
            {contador === 60 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c46} alt="Cronômetro" />
              )}

            {contador === 61 && (sequencia === 1 || sequencia === 2) && (
              <img src={c63} alt="Cronômetro" />
            )}
            {contador === 62 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c71} alt="Cronômetro" />
              )}
            {contador === 63 && (sequencia === 1 || sequencia === 2) && (
              <img src={c73} alt="Cronômetro" />
            )}
            {contador === 64 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c69} alt="Cronômetro" />
              )}
            {contador === 65 && (sequencia === 1 || sequencia === 2) && (
              <img src={c80} alt="Cronômetro" />
            )}
            {contador === 66 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c66} alt="Cronômetro" />
              )}
            {contador === 67 && (sequencia === 1 || sequencia === 2) && (
              <img src={c75} alt="Cronômetro" />
            )}
            {contador === 68 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c62} alt="Cronômetro" />
              )}
            {contador === 69 && (sequencia === 1 || sequencia === 2) && (
              <img src={c77} alt="Cronômetro" />
            )}
            {contador === 70 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c85} alt="Cronômetro" />
              )}
            {contador === 71 && (sequencia === 1 || sequencia === 2) && (
              <img src={c90} alt="Cronômetro" />
            )}
            {contador === 72 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c65} alt="Cronômetro" />
              )}
            {contador === 73 && (sequencia === 1 || sequencia === 2) && (
              <img src={c76} alt="Cronômetro" />
            )}
            {contador === 74 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c64} alt="Cronômetro" />
              )}
            {contador === 75 && (sequencia === 1 || sequencia === 2) && (
              <img src={c82} alt="Cronômetro" />
            )}
            {contador === 76 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c88} alt="Cronômetro" />
              )}
            {contador === 77 && (sequencia === 1 || sequencia === 2) && (
              <img src={c89} alt="Cronômetro" />
            )}
            {contador === 78 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c78} alt="Cronômetro" />
              )}
            {contador === 79 && (sequencia === 1 || sequencia === 2) && (
              <img src={c68} alt="Cronômetro" />
            )}
            {contador === 80 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c84} alt="Cronômetro" />
              )}
            {contador === 81 && (sequencia === 1 || sequencia === 2) && (
              <img src={c74} alt="Cronômetro" />
            )}
            {contador === 82 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c87} alt="Cronômetro" />
              )}
            {contador === 83 && (sequencia === 1 || sequencia === 2) && (
              <img src={c61} alt="Cronômetro" />
            )}
            {contador === 84 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c70} alt="Cronômetro" />
              )}
            {contador === 85 && (sequencia === 1 || sequencia === 2) && (
              <img src={c81} alt="Cronômetro" />
            )}
            {contador === 86 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c83} alt="Cronômetro" />
              )}
            {contador === 87 && (sequencia === 1 || sequencia === 2) && (
              <img src={c67} alt="Cronômetro" />
            )}
            {contador === 88 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c86} alt="Cronômetro" />
              )}
            {contador === 89 && (sequencia === 1 || sequencia === 2) && (
              <img src={c79} alt="Cronômetro" />
            )}
            {contador === 90 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c72} alt="Cronômetro" />
              )}

            {contador === 91 && (sequencia === 1 || sequencia === 2) && (
              <img src={c98} alt="Cronômetro" />
            )}
            {contador === 92 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c92} alt="Cronômetro" />
              )}
            {contador === 93 && (sequencia === 1 || sequencia === 2) && (
              <img src={c100} alt="Cronômetro" />
            )}
            {contador === 94 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c93} alt="Cronômetro" />
              )}
            {contador === 95 && (sequencia === 1 || sequencia === 2) && (
              <img src={c96} alt="Cronômetro" />
            )}
            {contador === 96 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c94} alt="Cronômetro" />
              )}
            {contador === 97 && (sequencia === 1 || sequencia === 2) && (
              <img src={c95} alt="Cronômetro" />
            )}
            {contador === 98 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c99} alt="Cronômetro" />
              )}
            {contador === 99 && (sequencia === 1 || sequencia === 2) && (
              <img src={c97} alt="Cronômetro" />
            )}
            {contador === 100 &&
              (sequencia === 1 || sequencia === 2 || sequencia === 3) && (
                <img src={c91} alt="Cronômetro" />
              )}
          </strong>
        </div>
        <div>
          <span>
            {contador === 1 && (sequencia === 1 || sequencia === 3) && 11}
            {contador === 2 && sequencia === 1 && 19}
            {contador === 3 && (sequencia === 1 || sequencia === 3) && 1}
            {contador === 4 && sequencia === 1 && 24}
            {contador === 5 && (sequencia === 1 || sequencia === 3) && 2}
            {contador === 6 && sequencia === 1 && 15}
            {contador === 7 && (sequencia === 1 || sequencia === 3) && 3}
            {contador === 8 && sequencia === 1 && 29}
            {contador === 9 && (sequencia === 1 || sequencia === 3) && 13}
            {contador === 10 && sequencia === 1 && 22}
            {contador === 11 && (sequencia === 1 || sequencia === 3) && 8}
            {contador === 12 && sequencia === 1 && 26}
            {contador === 13 && (sequencia === 1 || sequencia === 3) && 17}
            {contador === 14 && sequencia === 1 && 27}
            {contador === 15 && (sequencia === 1 || sequencia === 3) && 6}
            {contador === 16 && sequencia === 1 && 14}
            {contador === 17 && (sequencia === 1 || sequencia === 3) && 4}
            {contador === 18 && sequencia === 1 && 20}
            {contador === 19 && (sequencia === 1 || sequencia === 3) && 9}
            {contador === 20 && sequencia === 1 && 16}
            {contador === 21 && (sequencia === 1 || sequencia === 3) && 23}
            {contador === 22 && sequencia === 1 && 7}
            {contador === 23 && (sequencia === 1 || sequencia === 3) && 18}
            {contador === 24 && sequencia === 1 && 10}
            {contador === 25 && (sequencia === 1 || sequencia === 3) && 5}
            {contador === 26 && sequencia === 1 && 28}
            {contador === 27 && (sequencia === 1 || sequencia === 3) && 12}
            {contador === 28 && sequencia === 1 && 30}
            {contador === 29 && (sequencia === 1 || sequencia === 3) && 21}
            {contador === 30 && sequencia === 1 && 25}

            {contador === 31 && (sequencia === 1 || sequencia === 3) && 34}
            {contador === 32 && sequencia === 1 && 32}
            {contador === 33 && (sequencia === 1 || sequencia === 3) && 51}
            {contador === 34 && sequencia === 1 && 41}
            {contador === 35 && (sequencia === 1 || sequencia === 3) && 37}
            {contador === 36 && sequencia === 1 && 58}
            {contador === 37 && (sequencia === 1 || sequencia === 3) && 47}
            {contador === 38 && sequencia === 1 && 50}
            {contador === 39 && (sequencia === 1 || sequencia === 3) && 54}
            {contador === 40 && sequencia === 1 && 35}
            {contador === 41 && (sequencia === 1 || sequencia === 3) && 48}
            {contador === 42 && sequencia === 1 && 44}
            {contador === 43 && (sequencia === 1 || sequencia === 3) && 56}
            {contador === 44 && sequencia === 1 && 39}
            {contador === 45 && (sequencia === 1 || sequencia === 3) && 59}
            {contador === 46 && sequencia === 1 && 45}
            {contador === 47 && (sequencia === 1 || sequencia === 3) && 53}
            {contador === 48 && sequencia === 1 && 36}
            {contador === 49 && (sequencia === 1 || sequencia === 3) && 40}
            {contador === 50 && sequencia === 1 && 60}
            {contador === 51 && (sequencia === 1 || sequencia === 3) && 31}
            {contador === 52 && sequencia === 1 && 42}
            {contador === 53 && (sequencia === 1 || sequencia === 3) && 57}
            {contador === 54 && sequencia === 1 && 49}
            {contador === 55 && (sequencia === 1 || sequencia === 3) && 55}
            {contador === 56 && sequencia === 1 && 38}
            {contador === 57 && (sequencia === 1 || sequencia === 3) && 43}
            {contador === 58 && sequencia === 1 && 52}
            {contador === 59 && (sequencia === 1 || sequencia === 3) && 33}
            {contador === 60 && sequencia === 1 && 46}

            {contador === 61 && (sequencia === 1 || sequencia === 3) && 63}
            {contador === 62 && sequencia === 1 && 71}
            {contador === 63 && (sequencia === 1 || sequencia === 3) && 73}
            {contador === 64 && sequencia === 1 && 69}
            {contador === 65 && (sequencia === 1 || sequencia === 3) && 80}
            {contador === 66 && sequencia === 1 && 66}
            {contador === 67 && (sequencia === 1 || sequencia === 3) && 75}
            {contador === 68 && sequencia === 1 && 62}
            {contador === 69 && (sequencia === 1 || sequencia === 3) && 77}
            {contador === 70 && sequencia === 1 && 85}
            {contador === 71 && (sequencia === 1 || sequencia === 3) && 90}
            {contador === 72 && sequencia === 1 && 65}
            {contador === 73 && (sequencia === 1 || sequencia === 3) && 76}
            {contador === 74 && sequencia === 1 && 64}
            {contador === 75 && (sequencia === 1 || sequencia === 3) && 82}
            {contador === 76 && sequencia === 1 && 88}
            {contador === 77 && (sequencia === 1 || sequencia === 3) && 89}
            {contador === 78 && sequencia === 1 && 78}
            {contador === 79 && (sequencia === 1 || sequencia === 3) && 68}
            {contador === 80 && sequencia === 1 && 84}
            {contador === 81 && (sequencia === 1 || sequencia === 3) && 74}
            {contador === 82 && sequencia === 1 && 87}
            {contador === 83 && (sequencia === 1 || sequencia === 3) && 61}
            {contador === 84 && sequencia === 1 && 70}
            {contador === 85 && (sequencia === 1 || sequencia === 3) && 81}
            {contador === 86 && sequencia === 1 && 83}
            {contador === 87 && (sequencia === 1 || sequencia === 3) && 67}
            {contador === 88 && sequencia === 1 && 86}
            {contador === 89 && (sequencia === 1 || sequencia === 3) && 79}
            {contador === 90 && sequencia === 1 && 72}

            {contador === 91 && (sequencia === 1 || sequencia === 3) && 98}
            {contador === 92 && sequencia === 1 && 92}
            {contador === 93 && (sequencia === 1 || sequencia === 3) && 100}
            {contador === 94 && sequencia === 1 && 93}
            {contador === 95 && (sequencia === 1 || sequencia === 3) && 96}
            {contador === 96 && sequencia === 1 && 94}
            {contador === 97 && (sequencia === 1 || sequencia === 3) && 95}
            {contador === 98 && sequencia === 1 && 99}
            {contador === 99 && (sequencia === 1 || sequencia === 3) && 97}
            {contador === 100 && sequencia === 1 && 91}
          </span>
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
