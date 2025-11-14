import axios from 'axios';

axios.defaults.baseURL = 'https://shebajatra-api.vercel.app/';

axios.interceptors.request.use(
    (config) => {
        // You can modify the request config here if needed
        config.headers['Content-Type'] = 'application/json';
        config.headers['x_vercel_protection_bypass'] = "9ch6udxchAkuGTPqW866M0yZ4gx1kWha";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;