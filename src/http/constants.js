import axios from 'axios';

const API = axios.create({
  baseURL: 'https://astron-edu-api.herokuapp.com/',
});

export default API;
