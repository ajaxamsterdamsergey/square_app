import axios from 'axios';
const API_KEY = '15433400-0fb5bd3684436b571a53694dd';
const baseURL =
  (axios.defaults.baseURL = `https://pixabay.com/api/?key=${API_KEY}`);

export const getImages = async (query, page) => {
  const response = await axios.get(
    `${baseURL}&q=${query}&page=${page}&per_page=12`
  );
  return response.data;
};
