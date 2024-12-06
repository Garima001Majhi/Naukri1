// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://indeed-indeed.p.rapidapi.com/apisearch?v=2&format=json&q=java&l=austin%2C%20tx&radius=25', // Base URL for your API
});

export default instance;
