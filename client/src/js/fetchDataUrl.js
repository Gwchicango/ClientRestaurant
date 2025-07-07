import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api/';

export const fetchData = async (url) => {
  try {
    const response = await axios.get(BASE_URL+url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
