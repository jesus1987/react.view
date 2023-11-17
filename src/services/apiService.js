import axios from 'axios';
import { API_BASE_URL } from '../config';

const apiService = {
  getUsers: async (page, size) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Usuario?page=${page}&size=${size}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // You can choose to handle the error differently if needed
    }
  },
  // Add more methods for other API endpoints if needed
};

export default apiService;
