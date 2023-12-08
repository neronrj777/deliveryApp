// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://<192.168.1.192>:<4001>', // Replace withyour actual server IP and port
});

export default api;
