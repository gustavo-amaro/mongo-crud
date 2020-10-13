import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async (config) => {
    config.headers["Content-type"] = `application/json`;
    return config;
  });

export default api;