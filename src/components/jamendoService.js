import axios from 'axios';

const JAMENDO_API_URL = 'https://api.jamendo.com/v3.0';
const API_KEY = '63a9b65c'; // Your Jamendo API key

export const searchTracks = async (query) => {
  const response = await axios.get(`${JAMENDO_API_URL}/tracks`, {
    params: {
      client_id: API_KEY,
      format: 'json',
      limit: 12,
      namesearch: query,
    },
  });
  console.log(response);
  return response.data.results;
};
