import axios from 'axios';
import { Article } from '../interfaces/Article';

const API_KEY = import.meta.env.VITE_API_KEY; 
const API_URL = import.meta.env.VITE_API_URL;



export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(`${API_URL}${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return []; 
  }
};
