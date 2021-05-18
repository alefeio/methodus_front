import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateProvaRequest,
  updateEmProvaRequest,
  updateFimProvaRequest,
  updateRespostaRequest,
} from '~/store/modules/usuario/actions';

import icoConcluido from '~/assets/ico-concluido.jpg';

import {
  Container,
  Prod,
  ModUl,
  ModUl2,
  Titulo,
  Default,
  Danger,
} from './styles';

export default function Dashboard() {
  const [perfil, setPerfil] = useState();
  const [prova, setProva] = useState();
  const [provafinalizada, setProvafinalizada] = useState();
  const [ex1, setEx1] = useState(false);
  const [ex2, setEx2] = useState(false);
  const [ex332, setEx332] = useState(false);
  const [ex3, setEx3] = useState(false);
  const [ex4, setEx4] = useState(false);
  const [ex5, setEx5] = useState(false);
  const [ex6, setEx6] = useState(false);
  const [ex7, setEx7] = useState(false);
  const [ex8, setEx8] = useState(false);
  const [ex9, setEx9] = useState(false);
  const [ex10, setEx10] = useState(false);
  const [ex11, setEx11] = useState(false);
  const [ex12, setEx12] = useState(false);
  const [ex13, setEx13] = useState(false);
  const [ex14, setEx14] = useState(false);
  const [ex15, setEx15] = useState(false);
  const [ex16, setEx16] = useState(false);
  const [ex17, setEx17] = useState(false);
  const [ex18, setEx18] = useState(false);
  const [ex19, setEx19] = useState(false);
  const [ex20, setEx20] = useState(false);
  const [ex21, setEx21] = useState(false);
  const [ex22, setEx22] = useState(false);
  const [ex23, setEx23] = useState(false);
  const [ex24, setEx24] = useState(false);
  const [ex25, setEx25] = useState(false);
  const [ex26, setEx26] = useState(false);
  const [ex27, setEx27] = useState(false);
  const [ex28, setEx28] = useState(false);
  const [ex29, setEx29] = useState(false);
  const [ex30, setEx30] = useState(false);
  const [ex31, setEx31] = useState(false);
  const [ex32, setEx32] = useState(false);
  const [ex33, setEx33] = useState(false);
  const [ex34, setEx34] = useState(false);
  const [ex35, setEx35] = useState(false);
  const [ex36, setEx36] = useState(false);

  const [ex333, setEx333] = useState(false);
  const [ex37, setEx37] = useState(false);
  const [ex38, setEx38] = useState(false);
  const [ex39, setEx39] = useState(false);
  const [ex40, setEx40] = useState(false);
  const [ex41, setEx41] = useState(false);
  const [ex42, setEx42] = useState(false);
  const [ex43, setEx43] = useState(false);
  const [ex44, setEx44] = useState(false);
  const [ex45, setEx45] = useState(false);
  const [ex46, setEx46] = useState(false);
  const [ex47, setEx47] = useState(false);
  const [ex48, setEx48] = useState(false);
  const [ex49, setEx49] = useState(false);
  const [ex50, setEx50] = useState(false);
  const [ex51, setEx51] = useState(false);
  const [ex52, setEx52] = useState(false);
  const [ex53, setEx53] = useState(false);
  const [ex54, setEx54] = useState(false);
  const [ex55, setEx55] = useState(false);
  const [ex56, setEx56] = useState(false);
  const [ex57, setEx57] = useState(false);
  const [ex58, setEx58] = useState(false);
  const [ex59, setEx59] = useState(false);

  const [ex60, setEx60] = useState(false);
  const [ex61, setEx61] = useState(false);
  const [ex62, setEx62] = useState(false);
  const [ex63, setEx63] = useState(false);
  const [ex64, setEx64] = useState(false);
  const [ex65, setEx65] = useState(false);
  const [ex66, setEx66] = useState(false);
  const [ex67, setEx67] = useState(false);
  const [ex68, setEx68] = useState(false);
  const [ex69, setEx69] = useState(false);
  const [ex70, setEx70] = useState(false);
  const [ex71, setEx71] = useState(false);
  const [ex72, setEx72] = useState(false);
  const [ex73, setEx73] = useState(false);
  const [ex74, setEx74] = useState(false);
  const [ex75, setEx75] = useState(false);
  const [ex76, setEx76] = useState(false);
  const [ex77, setEx77] = useState(false);
  const [ex78, setEx78] = useState(false);
  const [ex79, setEx79] = useState(false);
  const [ex80, setEx80] = useState(false);
  const [ex81, setEx81] = useState(false);
  const [ex82, setEx82] = useState(false);
  const [ex83, setEx83] = useState(false);
  const [ex84, setEx84] = useState(false);
  const [ex85, setEx85] = useState(false);
  const [ex86, setEx86] = useState(false);
  const [ex87, setEx87] = useState(false);
  const [ex88, setEx89] = useState(false);
  const [ex89, setEx88] = useState(false);
  const [ex90, setEx90] = useState(false);

  const [ex91, setEx91] = useState(false);
  const [ex92, setEx92] = useState(false);
  const [ex93, setEx93] = useState(false);
  const [ex94, setEx94] = useState(false);
  const [ex95, setEx95] = useState(false);
  const [ex96, setEx96] = useState(false);
  const [ex97, setEx97] = useState(false);
  const [ex98, setEx98] = useState(false);
  const [ex99, setEx99] = useState(false);
  const [ex100, setEx100] = useState(false);
  const [ex101, setEx101] = useState(false);
  const [ex102, setEx102] = useState(false);
  const [ex103, setEx103] = useState(false);
  const [ex104, setEx104] = useState(false);
  const [ex105, setEx105] = useState(false);
  const [ex106, setEx106] = useState(false);
  const [ex107, setEx107] = useState(false);
  const [ex108, setEx108] = useState(false);
  const [ex109, setEx109] = useState(false);
  const [ex110, setEx110] = useState(false);
  const [ex111, setEx111] = useState(false);
  const [ex112, setEx112] = useState(false);
  const [ex113, setEx113] = useState(false);
  const [ex114, setEx114] = useState(false);
  const [ex115, setEx115] = useState(false);
  const [ex116, setEx116] = useState(false);
  const [ex117, setEx117] = useState(false);
  const [ex118, setEx118] = useState(false);
  const [ex119, setEx119] = useState(false);

  const [ex120, setEx120] = useState(false);
  const [ex121, setEx121] = useState(false);
  const [ex122, setEx122] = useState(false);
  const [ex123, setEx123] = useState(false);
  const [ex124, setEx124] = useState(false);
  const [ex125, setEx125] = useState(false);
  const [ex126, setEx126] = useState(false);
  const [ex127, setEx127] = useState(false);
  const [ex128, setEx128] = useState(false);
  const [ex129, setEx129] = useState(false);
  const [ex130, setEx130] = useState(false);
  const [ex131, setEx131] = useState(false);
  const [ex132, setEx132] = useState(false);
  const [ex133, setEx133] = useState(false);
  const [ex134, setEx134] = useState(false);
  const [ex135, setEx135] = useState(false);
  const [ex136, setEx136] = useState(false);
  const [ex137, setEx137] = useState(false);
  const [ex138, setEx138] = useState(false);
  const [ex139, setEx139] = useState(false);
  const [ex140, setEx140] = useState(false);
  const [ex141, setEx141] = useState(false);
  const [ex142, setEx142] = useState(false);
  const [ex143, setEx143] = useState(false);
  const [ex144, setEx144] = useState(false);
  const [ex145, setEx145] = useState(false);
  const [ex146, setEx146] = useState(false);
  const [ex147, setEx147] = useState(false);
  const [ex148, setEx148] = useState(false);
  const [ex149, setEx149] = useState(false);
  const [ex150, setEx150] = useState(false);

  const [ex151, setEx151] = useState(false);
  const [ex152, setEx152] = useState(false);
  const [ex153, setEx153] = useState(false);
  const [ex154, setEx154] = useState(false);
  const [ex155, setEx155] = useState(false);
  const [ex156, setEx156] = useState(false);
  const [ex157, setEx157] = useState(false);
  const [ex158, setEx158] = useState(false);
  const [ex159, setEx159] = useState(false);
  const [ex160, setEx160] = useState(false);
  const [ex161, setEx161] = useState(false);
  const [ex162, setEx162] = useState(false);
  const [ex163, setEx163] = useState(false);
  const [ex164, setEx164] = useState(false);
  const [ex165, setEx165] = useState(false);
  const [ex166, setEx166] = useState(false);
  const [ex167, setEx167] = useState(false);
  const [ex168, setEx168] = useState(false);
  const [ex169, setEx169] = useState(false);
  const [ex170, setEx170] = useState(false);
  const [ex171, setEx171] = useState(false);
  const [ex172, setEx172] = useState(false);
  const [ex173, setEx173] = useState(false);
  const [ex174, setEx174] = useState(false);
  const [ex175, setEx175] = useState(false);
  const [ex176, setEx176] = useState(false);
  const [ex177, setEx177] = useState(false);

  const [ex178, setEx178] = useState(false);
  const [ex179, setEx179] = useState(false);
  const [ex180, setEx180] = useState(false);
  const [ex181, setEx181] = useState(false);
  const [ex182, setEx182] = useState(false);
  const [ex183, setEx183] = useState(false);
  const [ex184, setEx184] = useState(false);
  const [ex185, setEx185] = useState(false);

  const [ex186, setEx186] = useState(false);
  const [ex187, setEx187] = useState(false);
  const [ex188, setEx188] = useState(false);
  const [ex189, setEx189] = useState(false);
  const [ex190, setEx190] = useState(false);
  const [ex191, setEx191] = useState(false);
  const [ex192, setEx192] = useState(false);
  const [ex193, setEx193] = useState(false);
  const [ex194, setEx194] = useState(false);
  const [ex195, setEx195] = useState(false);
  const [ex196, setEx196] = useState(false);
  const [ex197, setEx197] = useState(false);
  const [ex198, setEx198] = useState(false);
  const [ex199, setEx199] = useState(false);
  const [ex200, setEx200] = useState(false);
  const [ex201, setEx201] = useState(false);
  const [ex202, setEx202] = useState(false);
  const [ex203, setEx203] = useState(false);
  const [ex204, setEx204] = useState(false);
  const [ex205, setEx205] = useState(false);
  const [ex206, setEx206] = useState(false);
  const [ex207, setEx207] = useState(false);

  const [ex208, setEx208] = useState(false);
  const [ex209, setEx209] = useState(false);
  const [ex210, setEx210] = useState(false);
  const [ex211, setEx211] = useState(false);
  const [ex212, setEx212] = useState(false);
  const [ex213, setEx213] = useState(false);
  const [ex214, setEx214] = useState(false);
  const [ex215, setEx215] = useState(false);
  const [ex216, setEx216] = useState(false);
  const [ex217, setEx217] = useState(false);
  const [ex218, setEx218] = useState(false);
  const [ex219, setEx219] = useState(false);
  const [ex220, setEx220] = useState(false);
  const [ex221, setEx221] = useState(false);
  const [ex222, setEx222] = useState(false);
  const [ex223, setEx223] = useState(false);
  const [ex224, setEx224] = useState(false);
  const [ex225, setEx225] = useState(false);
  const [ex226, setEx226] = useState(false);
  const [ex227, setEx227] = useState(false);
  const [ex228, setEx228] = useState(false);
  const [ex229, setEx229] = useState(false);
  const [ex230, setEx230] = useState(false);
  const [ex231, setEx231] = useState(false);
  const [ex232, setEx232] = useState(false);
  const [ex233, setEx233] = useState(false);
  const [ex234, setEx234] = useState(false);
  const [ex235, setEx235] = useState(false);
  const [ex236, setEx236] = useState(false);
  const [ex237, setEx237] = useState(false);
  const [ex238, setEx238] = useState(false);
  const [ex239, setEx239] = useState(false);
  const [ex240, setEx240] = useState(false);
  const [ex241, setEx241] = useState(false);
  const [ex242, setEx242] = useState(false);
  const [ex243, setEx243] = useState(false);
  const [ex244, setEx244] = useState(false);
  const [ex245, setEx245] = useState(false);
  const [ex246, setEx246] = useState(false);
  const [ex247, setEx247] = useState(false);
  const [ex248, setEx248] = useState(false);
  const [ex249, setEx249] = useState(false);
  const [ex250, setEx250] = useState(false);
  const [ex251, setEx251] = useState(false);
  const [ex252, setEx252] = useState(false);
  const [ex253, setEx253] = useState(false);
  const [ex254, setEx254] = useState(false);
  const [ex255, setEx255] = useState(false);
  const [ex256, setEx256] = useState(false);
  const [ex257, setEx257] = useState(false);
  const [ex258, setEx258] = useState(false);
  const [ex259, setEx259] = useState(false);
  const [ex260, setEx260] = useState(false);
  const [ex261, setEx261] = useState(false);
  const [ex262, setEx262] = useState(false);
  const [ex263, setEx263] = useState(false);
  const [ex264, setEx264] = useState(false);
  const [ex265, setEx265] = useState(false);
  const [ex266, setEx266] = useState(false);
  const [ex267, setEx267] = useState(false);
  const [ex268, setEx268] = useState(false);
  const [ex269, setEx269] = useState(false);
  const [ex270, setEx270] = useState(false);
  const [ex271, setEx271] = useState(false);
  const [ex272, setEx272] = useState(false);
  const [ex273, setEx273] = useState(false);
  const [ex274, setEx274] = useState(false);
  const [ex275, setEx275] = useState(false);
  const [ex276, setEx276] = useState(false);
  const [ex277, setEx277] = useState(false);
  const [ex278, setEx278] = useState(false);
  const [ex279, setEx279] = useState(false);
  const [ex280, setEx280] = useState(false);
  const [ex281, setEx281] = useState(false);
  const [ex282, setEx282] = useState(false);
  const [ex283, setEx283] = useState(false);
  const [ex284, setEx284] = useState(false);
  const [ex285, setEx285] = useState(false);

  const [ex286, setEx286] = useState(false);
  const [ex287, setEx287] = useState(false);
  const [ex288, setEx288] = useState(false);
  const [ex289, setEx289] = useState(false);
  const [ex290, setEx290] = useState(false);
  const [ex291, setEx291] = useState(false);
  const [ex292, setEx292] = useState(false);
  const [ex293, setEx293] = useState(false);
  const [ex294, setEx294] = useState(false);
  const [ex295, setEx295] = useState(false);
  const [ex296, setEx296] = useState(false);
  const [ex297, setEx297] = useState(false);
  const [ex298, setEx298] = useState(false);
  const [ex299, setEx299] = useState(false);
  const [ex300, setEx300] = useState(false);
  const [ex301, setEx301] = useState(false);
  const [ex302, setEx302] = useState(false);
  const [ex303, setEx303] = useState(false);
  const [ex304, setEx304] = useState(false);
  const [ex305, setEx305] = useState(false);
  const [ex306, setEx306] = useState(false);
  const [ex307, setEx307] = useState(false);
  const [ex308, setEx308] = useState(false);
  const [ex309, setEx309] = useState(false);
  const [ex310, setEx310] = useState(false);
  const [ex311, setEx311] = useState(false);
  const [ex312, setEx312] = useState(false);
  const [ex313, setEx313] = useState(false);
  const [ex314, setEx314] = useState(false);
  const [ex315, setEx315] = useState(false);
  const [ex316, setEx316] = useState(false);
  const [ex317, setEx317] = useState(false);
  const [ex318, setEx318] = useState(false);
  const [ex319, setEx319] = useState(false);
  const [ex320, setEx320] = useState(false);
  const [ex321, setEx321] = useState(false);
  const [ex322, setEx322] = useState(false);

  const [ex323, setEx323] = useState(false);
  const [ex324, setEx324] = useState(false);
  const [ex325, setEx325] = useState(false);
  const [ex326, setEx326] = useState(false);
  const [ex327, setEx327] = useState(false);

  const [ex328, setEx328] = useState(false);
  const [ex329, setEx329] = useState(false);
  const [ex330, setEx330] = useState(false);
  const [ex331, setEx331] = useState(false);

  const [ex337, setEx337] = useState(false);
  const [ex338, setEx338] = useState(false);
  const [ex339, setEx339] = useState(false);
  const [ex340, setEx340] = useState(false);
  const [ex341, setEx341] = useState(false);
  const [ex342, setEx342] = useState(false);
  const [ex343, setEx343] = useState(false);
  const [ex344, setEx344] = useState(false);
  const [ex345, setEx345] = useState(false);
  const [ex346, setEx346] = useState(false);
  const [ex347, setEx347] = useState(false);
  const [ex348, setEx348] = useState(false);
  const [ex349, setEx349] = useState(false);
  const [ex350, setEx350] = useState(false);
  const [ex351, setEx351] = useState(false);
  const [ex352, setEx352] = useState(false);
  const [ex353, setEx353] = useState(false);
  const [ex354, setEx354] = useState(false);
  const [ex355, setEx355] = useState(false);
  const [ex356, setEx356] = useState(false);
  const [ex357, setEx357] = useState(false);
  const [ex358, setEx358] = useState(false);
  const [ex359, setEx359] = useState(false);
  const [ex360, setEx360] = useState(false);
  const [ex361, setEx361] = useState(false);
  const [ex362, setEx362] = useState(false);
  const [ex363, setEx363] = useState(false);
  const [ex364, setEx364] = useState(false);

  const dispatch = useDispatch();

  // const dadosProva = useSelector((state) => state.usuario.prova);

  const perf = useSelector((state) => state.usuario);

  async function finalizarProva() {
    try {
      await api.delete(`provasaluno/${prova.id}`);

      const response = await api.get(`provasfinalizadas`);

      setProva(null);
      dispatch(updateFimProvaRequest());
      setProvafinalizada(response.data);

      toast.success('Prova finalizada com sucesso!');
    } catch (error) {
      toast.error('Erro ao finalizar a prova. Tente novamente!');
    }
  }

  async function criarProva() {
    await api.post(`provas`);

    const response = await api.get(`provas`);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));
  }

  async function loadRespostasConcluidas() {
    perf.resposta.map((rp) => {
      if (rp === 1) setEx1(true);
      if (rp === 2) setEx2(true);
      if (rp === 332) setEx332(true);
      if (rp === 3) setEx3(true);
      if (rp === 4) setEx4(true);
      if (rp === 5) setEx5(true);
      if (rp === 6) setEx6(true);
      if (rp === 7) setEx7(true);
      if (rp === 8) setEx8(true);
      if (rp === 9) setEx9(true);
      if (rp === 10) setEx10(true);
      if (rp === 11) setEx11(true);
      if (rp === 12) setEx12(true);
      if (rp === 13) setEx13(true);
      if (rp === 14) setEx14(true);
      if (rp === 15) setEx15(true);
      if (rp === 16) setEx16(true);
      if (rp === 17) setEx17(true);
      if (rp === 18) setEx18(true);
      if (rp === 19) setEx19(true);
      if (rp === 20) setEx20(true);
      if (rp === 21) setEx21(true);
      if (rp === 22) setEx22(true);
      if (rp === 23) setEx23(true);
      if (rp === 24) setEx24(true);
      if (rp === 25) setEx25(true);
      if (rp === 26) setEx26(true);
      if (rp === 27) setEx27(true);
      if (rp === 28) setEx28(true);
      if (rp === 29) setEx29(true);
      if (rp === 30) setEx30(true);
      if (rp === 31) setEx31(true);
      if (rp === 32) setEx32(true);
      if (rp === 33) setEx33(true);
      if (rp === 34) setEx34(true);
      if (rp === 35) setEx35(true);
      if (rp === 36) setEx36(true);

      if (rp === 333) setEx333(true);
      if (rp === 37) setEx37(true);
      if (rp === 38) setEx38(true);
      if (rp === 39) setEx39(true);
      if (rp === 40) setEx40(true);
      if (rp === 41) setEx41(true);
      if (rp === 42) setEx42(true);
      if (rp === 43) setEx43(true);
      if (rp === 44) setEx44(true);
      if (rp === 45) setEx45(true);
      if (rp === 46) setEx46(true);
      if (rp === 47) setEx47(true);
      if (rp === 48) setEx48(true);
      if (rp === 49) setEx49(true);
      if (rp === 50) setEx50(true);
      if (rp === 51) setEx51(true);
      if (rp === 52) setEx52(true);
      if (rp === 53) setEx53(true);
      if (rp === 54) setEx54(true);
      if (rp === 55) setEx55(true);
      if (rp === 56) setEx56(true);
      if (rp === 57) setEx57(true);
      if (rp === 58) setEx58(true);
      if (rp === 59) setEx59(true);

      if (rp === 60) setEx60(true);
      if (rp === 61) setEx61(true);
      if (rp === 62) setEx62(true);
      if (rp === 63) setEx63(true);
      if (rp === 64) setEx64(true);
      if (rp === 65) setEx65(true);
      if (rp === 66) setEx66(true);
      if (rp === 67) setEx67(true);
      if (rp === 68) setEx68(true);
      if (rp === 69) setEx69(true);
      if (rp === 70) setEx70(true);
      if (rp === 71) setEx71(true);
      if (rp === 72) setEx72(true);
      if (rp === 73) setEx73(true);
      if (rp === 74) setEx74(true);
      if (rp === 75) setEx75(true);
      if (rp === 76) setEx76(true);
      if (rp === 77) setEx77(true);
      if (rp === 78) setEx78(true);
      if (rp === 79) setEx79(true);
      if (rp === 80) setEx80(true);
      if (rp === 81) setEx81(true);
      if (rp === 82) setEx82(true);
      if (rp === 83) setEx83(true);
      if (rp === 84) setEx84(true);
      if (rp === 85) setEx85(true);
      if (rp === 86) setEx86(true);
      if (rp === 87) setEx87(true);
      if (rp === 88) setEx88(true);
      if (rp === 89) setEx89(true);
      if (rp === 90) setEx90(true);

      if (rp === 91) setEx91(true);
      if (rp === 92) setEx92(true);
      if (rp === 93) setEx93(true);
      if (rp === 94) setEx94(true);
      if (rp === 95) setEx95(true);
      if (rp === 96) setEx96(true);
      if (rp === 97) setEx97(true);
      if (rp === 98) setEx98(true);
      if (rp === 99) setEx99(true);
      if (rp === 100) setEx100(true);
      if (rp === 101) setEx101(true);
      if (rp === 102) setEx102(true);
      if (rp === 103) setEx103(true);
      if (rp === 104) setEx104(true);
      if (rp === 105) setEx105(true);
      if (rp === 106) setEx106(true);
      if (rp === 107) setEx107(true);
      if (rp === 108) setEx108(true);
      if (rp === 109) setEx109(true);
      if (rp === 110) setEx110(true);
      if (rp === 111) setEx111(true);
      if (rp === 112) setEx112(true);
      if (rp === 113) setEx113(true);
      if (rp === 114) setEx114(true);
      if (rp === 115) setEx115(true);
      if (rp === 116) setEx116(true);
      if (rp === 117) setEx117(true);
      if (rp === 118) setEx118(true);
      if (rp === 119) setEx119(true);

      if (rp === 120) setEx120(true);
      if (rp === 121) setEx121(true);
      if (rp === 122) setEx122(true);
      if (rp === 123) setEx123(true);
      if (rp === 124) setEx124(true);
      if (rp === 125) setEx125(true);
      if (rp === 126) setEx126(true);
      if (rp === 127) setEx127(true);
      if (rp === 128) setEx128(true);
      if (rp === 129) setEx129(true);
      if (rp === 130) setEx130(true);
      if (rp === 131) setEx131(true);
      if (rp === 132) setEx132(true);
      if (rp === 133) setEx133(true);
      if (rp === 134) setEx134(true);
      if (rp === 135) setEx135(true);
      if (rp === 136) setEx136(true);
      if (rp === 137) setEx137(true);
      if (rp === 138) setEx138(true);
      if (rp === 139) setEx139(true);
      if (rp === 140) setEx140(true);
      if (rp === 141) setEx141(true);
      if (rp === 142) setEx142(true);
      if (rp === 143) setEx143(true);
      if (rp === 144) setEx144(true);
      if (rp === 145) setEx145(true);
      if (rp === 146) setEx146(true);
      if (rp === 147) setEx147(true);
      if (rp === 148) setEx148(true);
      if (rp === 149) setEx149(true);
      if (rp === 150) setEx150(true);

      if (rp === 151) setEx151(true);
      if (rp === 152) setEx152(true);
      if (rp === 153) setEx153(true);
      if (rp === 154) setEx154(true);
      if (rp === 155) setEx155(true);
      if (rp === 156) setEx156(true);
      if (rp === 157) setEx157(true);
      if (rp === 158) setEx158(true);
      if (rp === 159) setEx159(true);
      if (rp === 160) setEx160(true);
      if (rp === 161) setEx161(true);
      if (rp === 162) setEx162(true);
      if (rp === 163) setEx163(true);
      if (rp === 164) setEx164(true);
      if (rp === 165) setEx165(true);
      if (rp === 166) setEx166(true);
      if (rp === 167) setEx167(true);
      if (rp === 168) setEx168(true);
      if (rp === 169) setEx169(true);
      if (rp === 170) setEx170(true);
      if (rp === 171) setEx171(true);
      if (rp === 172) setEx172(true);
      if (rp === 173) setEx173(true);
      if (rp === 174) setEx174(true);
      if (rp === 175) setEx175(true);
      if (rp === 176) setEx176(true);
      if (rp === 177) setEx177(true);

      if (rp === 178) setEx178(true);
      if (rp === 179) setEx179(true);
      if (rp === 180) setEx180(true);
      if (rp === 181) setEx181(true);
      if (rp === 182) setEx182(true);
      if (rp === 183) setEx183(true);
      if (rp === 184) setEx184(true);
      if (rp === 185) setEx185(true);

      if (rp === 186) setEx186(true);
      if (rp === 187) setEx187(true);
      if (rp === 188) setEx188(true);
      if (rp === 189) setEx189(true);
      if (rp === 190) setEx190(true);
      if (rp === 191) setEx191(true);
      if (rp === 192) setEx192(true);
      if (rp === 193) setEx193(true);
      if (rp === 194) setEx194(true);
      if (rp === 195) setEx195(true);
      if (rp === 196) setEx196(true);
      if (rp === 197) setEx197(true);
      if (rp === 198) setEx198(true);
      if (rp === 199) setEx199(true);
      if (rp === 200) setEx200(true);
      if (rp === 201) setEx201(true);
      if (rp === 202) setEx202(true);
      if (rp === 203) setEx203(true);
      if (rp === 204) setEx204(true);
      if (rp === 205) setEx205(true);
      if (rp === 206) setEx206(true);
      if (rp === 207) setEx207(true);

      if (rp === 208) setEx208(true);
      if (rp === 209) setEx209(true);
      if (rp === 210) setEx210(true);
      if (rp === 211) setEx211(true);
      if (rp === 212) setEx212(true);
      if (rp === 213) setEx213(true);
      if (rp === 214) setEx214(true);
      if (rp === 215) setEx215(true);
      if (rp === 216) setEx216(true);
      if (rp === 217) setEx217(true);
      if (rp === 218) setEx218(true);
      if (rp === 219) setEx219(true);
      if (rp === 220) setEx220(true);
      if (rp === 221) setEx221(true);
      if (rp === 222) setEx222(true);
      if (rp === 223) setEx223(true);
      if (rp === 224) setEx224(true);
      if (rp === 225) setEx225(true);
      if (rp === 226) setEx226(true);
      if (rp === 227) setEx227(true);
      if (rp === 228) setEx228(true);
      if (rp === 229) setEx229(true);
      if (rp === 230) setEx230(true);
      if (rp === 231) setEx231(true);
      if (rp === 232) setEx232(true);
      if (rp === 233) setEx233(true);
      if (rp === 234) setEx234(true);
      if (rp === 235) setEx235(true);
      if (rp === 236) setEx236(true);
      if (rp === 237) setEx237(true);
      if (rp === 238) setEx238(true);
      if (rp === 239) setEx239(true);
      if (rp === 240) setEx240(true);
      if (rp === 241) setEx241(true);
      if (rp === 242) setEx242(true);
      if (rp === 243) setEx243(true);
      if (rp === 244) setEx244(true);
      if (rp === 245) setEx245(true);
      if (rp === 246) setEx246(true);
      if (rp === 247) setEx247(true);
      if (rp === 248) setEx248(true);
      if (rp === 249) setEx249(true);
      if (rp === 250) setEx250(true);
      if (rp === 251) setEx251(true);
      if (rp === 252) setEx252(true);
      if (rp === 253) setEx253(true);
      if (rp === 254) setEx254(true);
      if (rp === 255) setEx255(true);
      if (rp === 256) setEx256(true);
      if (rp === 257) setEx257(true);
      if (rp === 258) setEx258(true);
      if (rp === 259) setEx259(true);
      if (rp === 260) setEx260(true);
      if (rp === 261) setEx261(true);
      if (rp === 262) setEx262(true);
      if (rp === 263) setEx263(true);
      if (rp === 264) setEx264(true);
      if (rp === 265) setEx265(true);
      if (rp === 266) setEx266(true);
      if (rp === 267) setEx267(true);
      if (rp === 268) setEx268(true);
      if (rp === 269) setEx269(true);
      if (rp === 270) setEx270(true);
      if (rp === 271) setEx271(true);
      if (rp === 272) setEx272(true);
      if (rp === 273) setEx273(true);
      if (rp === 274) setEx274(true);
      if (rp === 275) setEx275(true);
      if (rp === 276) setEx276(true);
      if (rp === 277) setEx277(true);
      if (rp === 278) setEx278(true);
      if (rp === 279) setEx279(true);
      if (rp === 280) setEx280(true);
      if (rp === 281) setEx281(true);
      if (rp === 282) setEx282(true);
      if (rp === 283) setEx283(true);
      if (rp === 284) setEx284(true);
      if (rp === 285) setEx285(true);

      if (rp === 286) setEx286(true);
      if (rp === 287) setEx287(true);
      if (rp === 288) setEx288(true);
      if (rp === 289) setEx289(true);
      if (rp === 290) setEx290(true);
      if (rp === 291) setEx291(true);
      if (rp === 292) setEx292(true);
      if (rp === 293) setEx293(true);
      if (rp === 294) setEx294(true);
      if (rp === 295) setEx295(true);
      if (rp === 296) setEx296(true);
      if (rp === 297) setEx297(true);
      if (rp === 298) setEx298(true);
      if (rp === 299) setEx299(true);
      if (rp === 300) setEx300(true);
      if (rp === 301) setEx301(true);
      if (rp === 302) setEx302(true);
      if (rp === 303) setEx303(true);
      if (rp === 304) setEx304(true);
      if (rp === 305) setEx305(true);
      if (rp === 306) setEx306(true);
      if (rp === 307) setEx307(true);
      if (rp === 308) setEx308(true);
      if (rp === 309) setEx309(true);
      if (rp === 310) setEx310(true);
      if (rp === 311) setEx311(true);
      if (rp === 312) setEx312(true);
      if (rp === 313) setEx313(true);
      if (rp === 314) setEx314(true);
      if (rp === 315) setEx315(true);
      if (rp === 316) setEx316(true);
      if (rp === 317) setEx317(true);
      if (rp === 318) setEx318(true);
      if (rp === 319) setEx319(true);
      if (rp === 320) setEx320(true);
      if (rp === 321) setEx321(true);
      if (rp === 322) setEx322(true);

      if (rp === 323) setEx323(true);
      if (rp === 324) setEx324(true);
      if (rp === 325) setEx325(true);
      if (rp === 326) setEx326(true);
      if (rp === 327) setEx327(true);

      if (rp === 328) setEx328(true);
      if (rp === 329) setEx329(true);
      if (rp === 330) setEx330(true);
      if (rp === 331) setEx331(true);

      if (rp === 337) setEx337(true);
      if (rp === 338) setEx338(true);
      if (rp === 339) setEx339(true);
      if (rp === 340) setEx340(true);
      if (rp === 341) setEx341(true);
      if (rp === 342) setEx342(true);
      if (rp === 343) setEx343(true);
      if (rp === 344) setEx344(true);
      if (rp === 345) setEx345(true);
      if (rp === 346) setEx346(true);
      if (rp === 347) setEx347(true);
      if (rp === 348) setEx348(true);
      if (rp === 349) setEx349(true);
      if (rp === 350) setEx350(true);
      if (rp === 351) setEx351(true);
      if (rp === 352) setEx352(true);
      if (rp === 353) setEx353(true);
      if (rp === 354) setEx354(true);
      if (rp === 355) setEx355(true);
      if (rp === 356) setEx356(true);
      if (rp === 357) setEx357(true);
      if (rp === 358) setEx358(true);
      if (rp === 359) setEx359(true);
      if (rp === 360) setEx360(true);
      if (rp === 361) setEx361(true);
      if (rp === 362) setEx362(true);
      if (rp === 363) setEx363(true);
      if (rp === 364) setEx364(true);
    });
  }

  async function loadProvas() {
    const response = await api.get(`provas`);

    console.log('Prova: ', response.data);

    setProva(response.data);
    dispatch(updateProvaRequest(response.data));

    const prova_id = response.data ? response.data.id : null;

    const respostaProva = await api.get(`respostaprova?prova_id=${prova_id}`);

    if (respostaProva.data) {
      respostaProva.data.map((rp) => {
        if (!perf.resposta.length) {
          dispatch(updateRespostaRequest(rp.exercicio_id));
          loadRespostasConcluidas();
          return;
        }

        const verif = perf.resposta.filter((pr) => pr === rp.exercicio_id);

        if (!verif.length) {
          dispatch(updateRespostaRequest(rp.exercicio_id));
          loadRespostasConcluidas();
        }
      });
    }
  }

  function fazerProva() {
    dispatch(updateEmProvaRequest());

    loadProvas();

    loadRespostasConcluidas();
  }

  useEffect(() => {
    async function loadPerfil() {
      setPerfil(perf.perfil);
    }

    loadPerfil();
  }, []);

  useEffect(() => {
    loadProvas();
  }, []);

  useEffect(() => {
    loadRespostasConcluidas();
  }, []);

  useEffect(() => {
    async function loadProvasFinalizadas() {
      const response2 = await api.get(`provasfinalizadas`);

      setProvafinalizada(response2.data);
    }

    loadProvasFinalizadas();
  }, []);

  return (
    <Container>
      {!perf.emProva && (
        <Prod>
          <div>
            <Titulo>Bem-vindo, {perfil && perfil.nome}</Titulo>
            <p>
              Segue abaixo algumas orientações para um melhor resultado em seus
              exercícios. Boa sorte!
            </p>
            <Titulo>Como treinar</Titulo>
            <p>- Momentos de 5 a 10 minutos (intensos) de estudo.</p>
            <br />
            <p>
              - Intercalar com intervalos mínimos de 30 a 60 minutos, mas não
              maiores do que 3 horas.
            </p>
            <br />
            <p>
              - O somatório desses momentos de estudo precisam ser de 60 minutos
              em cada período de 24h.
            </p>
          </div>
          <div>
            <Titulo>Prova em andamento</Titulo>
            {!prova && <Default onClick={criarProva}>Nova prova</Default>}
            <ul>
              {prova && (
                <li>
                  {`Id: ${prova.id} | Total: ${
                    prova.nota ? prova.nota.toFixed(1) : 0
                  }%`}
                  <br />
                  <br />
                  <Default onClick={fazerProva}>Acessar</Default>
                  <Danger onClick={finalizarProva}>Finalizar</Danger>
                </li>
              )}
            </ul>
          </div>

          <div>
            <Titulo>Provas finalizadas</Titulo>
            <ModUl>
              {provafinalizada &&
                provafinalizada.map((p) => (
                  <li key={p.id}>{`Id: ${p.id} | Nota: ${p.nota.toFixed(
                    1
                  )}`}</li>
                ))}
            </ModUl>
          </div>
        </Prod>
      )}
      {perf.emProva && (
        <Prod>
          <div>
            <h1>Leitura Dinâmica</h1>
            <h2>Exercícios apostila</h2>
            <h3>- No monitor</h3>
            <ul>
              <li>
                <Link to="/apostila/1">
                  1
                  {ex1 && (
                    <>
                      <small>(100%)</small>
                      <img src={icoConcluido} alt="Exercício concluído" />
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="/apostila/2">
                  2
                  {ex2 && (
                    <>
                      <small>(100%)</small>
                      <img src={icoConcluido} alt="Exercício concluído" />
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="/apostila/332">
                  3
                  {prova && (
                    <small>
                      {prova.monitor03 && `(${prova.monitor03.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex332 &&
                    ex3 &&
                    ex4 &&
                    ex5 &&
                    ex6 &&
                    ex7 &&
                    ex8 &&
                    ex9 &&
                    ex10 &&
                    ex11 &&
                    ex12 &&
                    ex13 &&
                    ex14 &&
                    ex15 &&
                    ex16 &&
                    ex17 &&
                    ex18 &&
                    ex19 &&
                    ex20 &&
                    ex21 &&
                    ex22 &&
                    ex23 &&
                    ex24 &&
                    ex25 &&
                    ex26 &&
                    ex27 &&
                    ex28 &&
                    ex29 &&
                    ex30 &&
                    ex31 &&
                    ex32 &&
                    ex33 &&
                    ex34 &&
                    ex35 &&
                    ex36 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/apostila/333">
                  4
                  {prova && (
                    <small>
                      {prova.monitor04 && `(${prova.monitor04.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex333 &&
                    ex37 &&
                    ex38 &&
                    ex39 &&
                    ex40 &&
                    ex41 &&
                    ex42 &&
                    ex43 &&
                    ex44 &&
                    ex45 &&
                    ex46 &&
                    ex47 &&
                    ex48 &&
                    ex49 &&
                    ex50 &&
                    ex51 &&
                    ex52 &&
                    ex53 &&
                    ex54 &&
                    ex55 &&
                    ex56 &&
                    ex57 &&
                    ex58 &&
                    ex59 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                {/* <Link to="/apostila/60"> */}
                <Link to="/apostila/334">
                  5
                  {prova && (
                    <small>
                      {prova.monitor05 && `(${prova.monitor05.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex60 &&
                    ex61 &&
                    ex62 &&
                    ex63 &&
                    ex64 &&
                    ex65 &&
                    ex66 &&
                    ex67 &&
                    ex68 &&
                    ex69 &&
                    ex70 &&
                    ex71 &&
                    ex72 &&
                    ex73 &&
                    ex74 &&
                    ex75 &&
                    ex76 &&
                    ex77 &&
                    ex78 &&
                    ex79 &&
                    ex80 &&
                    ex81 &&
                    ex82 &&
                    ex83 &&
                    ex84 &&
                    ex85 &&
                    ex86 &&
                    ex87 &&
                    ex88 &&
                    ex89 &&
                    ex90 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/apostila/335">
                  6
                  {prova && (
                    <small>
                      {prova.monitor06 && `(${prova.monitor06.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex91 &&
                    ex92 &&
                    ex93 &&
                    ex94 &&
                    ex95 &&
                    ex96 &&
                    ex97 &&
                    ex98 &&
                    ex99 &&
                    ex100 &&
                    ex101 &&
                    ex102 &&
                    ex103 &&
                    ex104 &&
                    ex105 &&
                    ex106 &&
                    ex107 &&
                    ex108 &&
                    ex109 &&
                    ex110 &&
                    ex111 &&
                    ex112 &&
                    ex113 &&
                    ex114 &&
                    ex115 &&
                    ex116 &&
                    ex117 &&
                    ex118 &&
                    ex119 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/apostila/336">
                  7
                  {prova && (
                    <small>
                      {prova.monitor07 && `(${prova.monitor07.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex120 &&
                    ex121 &&
                    ex122 &&
                    ex123 &&
                    ex124 &&
                    ex125 &&
                    ex126 &&
                    ex127 &&
                    ex128 &&
                    ex129 &&
                    ex130 &&
                    ex131 &&
                    ex132 &&
                    ex133 &&
                    ex134 &&
                    ex135 &&
                    ex136 &&
                    ex137 &&
                    ex138 &&
                    ex139 &&
                    ex140 &&
                    ex141 &&
                    ex142 &&
                    ex143 &&
                    ex144 &&
                    ex145 &&
                    ex146 &&
                    ex147 &&
                    ex148 &&
                    ex149 &&
                    ex150 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/apostila/151">
                  8
                  {prova && (
                    <small>
                      {prova.monitor08 && `(${prova.monitor08.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex151 &&
                    ex152 &&
                    ex153 &&
                    ex154 &&
                    ex155 &&
                    ex156 &&
                    ex157 &&
                    ex158 &&
                    ex159 &&
                    ex160 &&
                    ex161 &&
                    ex162 &&
                    ex163 &&
                    ex164 &&
                    ex165 &&
                    ex166 &&
                    ex167 &&
                    ex168 &&
                    ex169 &&
                    ex170 &&
                    ex171 &&
                    ex172 &&
                    ex173 &&
                    ex174 &&
                    ex175 &&
                    ex176 &&
                    ex177 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/apostila/337">
                  9
                  {prova && (
                    <small>
                      {prova.monitor09 && `(${prova.monitor09.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex337 &&
                    ex338 &&
                    ex339 &&
                    ex340 &&
                    ex341 &&
                    ex342 &&
                    ex343 &&
                    ex344 &&
                    ex345 &&
                    ex346 &&
                    ex347 &&
                    ex348 &&
                    ex349 &&
                    ex350 &&
                    ex351 &&
                    ex352 &&
                    ex353 &&
                    ex354 &&
                    ex355 &&
                    ex356 &&
                    ex357 &&
                    ex358 &&
                    ex359 &&
                    ex360 &&
                    ex361 &&
                    ex362 &&
                    ex363 &&
                    ex364 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/percepcaovisual/186">
                  10
                  {prova && (
                    <small>
                      {prova.percepcao01 &&
                        `(${prova.percepcao01.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex186 &&
                    ex187 &&
                    ex188 &&
                    ex189 &&
                    ex190 &&
                    ex191 &&
                    ex192 &&
                    ex193 &&
                    ex194 &&
                    ex195 &&
                    ex196 &&
                    ex197 &&
                    ex198 &&
                    ex199 &&
                    ex200 &&
                    ex201 &&
                    ex202 &&
                    ex203 &&
                    ex204 &&
                    ex205 &&
                    ex206 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/percepcaovisual/208">
                  11
                  {prova && (
                    <small>
                      {prova.percepcao02 &&
                        `(${prova.percepcao02.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex208 &&
                    ex209 &&
                    ex210 &&
                    ex211 &&
                    ex212 &&
                    ex213 &&
                    ex214 &&
                    ex215 &&
                    ex216 &&
                    ex217 &&
                    ex218 &&
                    ex219 &&
                    ex220 &&
                    ex221 &&
                    ex222 &&
                    ex223 &&
                    ex224 &&
                    ex225 &&
                    ex226 &&
                    ex227 &&
                    ex228 &&
                    ex229 &&
                    ex230 &&
                    ex231 &&
                    ex232 &&
                    ex233 &&
                    ex234 &&
                    ex235 &&
                    ex236 &&
                    ex237 &&
                    ex238 &&
                    ex239 &&
                    ex240 &&
                    ex242 &&
                    ex243 &&
                    ex244 &&
                    ex245 &&
                    ex246 &&
                    ex247 &&
                    ex248 &&
                    ex249 &&
                    ex250 &&
                    ex251 &&
                    ex252 &&
                    ex253 &&
                    ex254 &&
                    ex255 &&
                    ex256 &&
                    ex257 &&
                    ex258 &&
                    ex259 &&
                    ex260 &&
                    ex261 &&
                    ex262 &&
                    ex263 &&
                    ex264 &&
                    ex265 &&
                    ex266 &&
                    ex267 &&
                    ex268 &&
                    ex269 &&
                    ex270 &&
                    ex271 &&
                    ex272 &&
                    ex273 &&
                    ex274 &&
                    ex275 &&
                    ex276 &&
                    ex277 &&
                    ex278 &&
                    ex279 &&
                    ex280 &&
                    ex281 &&
                    ex282 &&
                    ex283 &&
                    ex284 &&
                    ex285 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/percepcaovisual/286">
                  12
                  {prova && (
                    <small>
                      {prova.percepcao03 &&
                        `(${prova.percepcao03.toFixed(1)}%)`}
                    </small>
                  )}
                  {ex286 &&
                    ex287 &&
                    ex288 &&
                    ex289 &&
                    ex290 &&
                    ex291 &&
                    ex292 &&
                    ex293 &&
                    ex294 &&
                    ex295 &&
                    ex296 &&
                    ex297 &&
                    ex298 &&
                    ex299 &&
                    ex300 &&
                    ex301 &&
                    ex302 &&
                    ex303 &&
                    ex304 &&
                    ex305 &&
                    ex306 &&
                    ex307 &&
                    ex308 &&
                    ex309 &&
                    ex310 &&
                    ex311 &&
                    ex312 &&
                    ex313 &&
                    ex314 &&
                    ex315 &&
                    ex316 &&
                    ex317 &&
                    ex318 &&
                    ex319 &&
                    ex320 &&
                    ex321 &&
                    ex322 && (
                      <img src={icoConcluido} alt="Exercício concluído" />
                    )}
                </Link>
              </li>
              <li>
                <Link to="/percepcaovisual/207">
                  13
                  {ex207 && ex241 && (
                    <>
                      <small>(100%)</small>
                      <img src={icoConcluido} alt="Exercício concluído" />
                    </>
                  )}
                </Link>
              </li>
            </ul>
            <h3>- Com timer</h3>
            <ul>
              <li>
                <Link to="/comtimer/178">
                  1
                  {ex178 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/comtimer/179">
                  2
                  {ex179 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/comtimer/180">
                  3
                  {ex180 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/comtimer/181">
                  4
                  {ex181 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/comtimer/182">
                  5
                  {ex182 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/comtimer/183">
                  6
                  {ex183 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/comtimer/184">
                  7
                  {ex184 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/comtimer/185">
                  8
                  {ex185 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
            </ul>
            <h2>Exercícios de auto-aceleração</h2>
            <ModUl>
              <li>
                <Link to="/autoaceleracao/323">
                  45" - 20"
                  {ex323 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/autoaceleracao/324">
                  30" - 20"
                  {ex324 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/autoaceleracao/325">
                  30" - 15"
                  {ex325 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/autoaceleracao/326">
                  20" - 10"
                  {ex326 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/autoaceleracao/327">
                  15" - 05"
                  {ex327 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
            </ModUl>
          </div>
          <div>
            <h1>Memória</h1>
            <h2>Código alfa-numérico</h2>
            <h3>- Repasses</h3>
            <ModUl2>
              <li>
                <Link to="/memorizacao/328">
                  01 - 30
                  {ex328 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/memorizacao/329">
                  31 - 60
                  {ex329 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/memorizacao/330">
                  61 - 90
                  {ex330 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
              <li>
                <Link to="/memorizacao/331">
                  91 - 0
                  {ex331 && (
                    <img src={icoConcluido} alt="Exercício concluído" />
                  )}
                </Link>
              </li>
            </ModUl2>

            <Titulo>Dados da Prova</Titulo>
            <ul>
              {prova && (
                <li>
                  {`Id: ${prova.id} | Total: ${
                    prova.nota ? prova.nota.toFixed(1) : 0
                  }%`}
                  <Default onClick={fazerProva}>Interromper</Default>
                </li>
              )}
            </ul>
          </div>
        </Prod>
      )}
    </Container>
  );
}
