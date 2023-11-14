import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.methodusexercicios.com.br/',
  // baseURL2: 'http://localhost:3333',
});

export default api;
