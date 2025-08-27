import axios from 'axios';

export const internalApi = axios.create({
  baseURL: 'https://rn-backend-test.vercel.app/api/v1',
});
