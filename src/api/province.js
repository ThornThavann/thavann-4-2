import axios from 'axios';
import API_BASE_URL from '../config';

const summaryAPI = axios.create({
  baseURL: `${API_BASE_URL}`
});

export const getCrop = async () => {
  try {
    const response = await summaryAPI.get('crop');
    return response.data;
  } catch (error) {
    console.error('Error fetching province:', error);
    throw error;
  }
};
export const getCroptypes = async (crop_id) => {
  try {
    const response = await summaryAPI.get(`crop-types?crop_id=${crop_id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching province:', error);
    throw error;
  }
};
