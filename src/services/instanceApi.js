//instancia del api
import axios from "axios";

const instanceHTTP = axios.create({
    baseURL: 'https://reqres.in/api/',
    timeout: 1000,
    headers: {}
});

export default instanceHTTP;