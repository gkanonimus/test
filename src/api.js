import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // URL вашего Express.js сервера
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getProducts() {
    return apiClient.get('/products');
  },
  // Другие методы для работы с API...
};
