'use strict';
const axios = require('axios');

const baseURL = process.env.NODE_ENV === 'dev' ? 'http://localhost:7001/api' : '/';
const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,
});
module.exports = axiosInstance;
