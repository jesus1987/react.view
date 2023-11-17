import axios from 'axios';
import { API_BASE_URL } from '../config';

const insertarUsuario = async (nuevoUsuario) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/Usuario`, nuevoUsuario);
    } catch (error) {
      throw error;
    }
  };
  
  export default { insertarUsuario };
