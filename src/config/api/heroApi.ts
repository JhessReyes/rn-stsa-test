import axios from 'axios';

export const heroApi = axios.create({
  baseURL: 'https://akabab.github.io/superhero-api/api',
});
