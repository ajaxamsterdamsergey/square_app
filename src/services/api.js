import axios from 'axios';
//const API_KEY = '15433400-0fb5bd3684436b571a53694dd';
const baseURL =
  (axios.defaults.baseURL = `https://633beafec1910b5de0cc6c8a.mockapi.io/`);

export const getData = async () => {
  const response = await axios.get(`${baseURL}game`);
  return response.data;
};

