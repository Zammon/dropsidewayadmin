import axios from "axios";

const BaseURL = Object.freeze({
    LOCALHOST: 'https://localhost:7113/api/',
    DEPLOY: 'https://api.dropsideway.adoppix.com/api/' 
})

const AxiosFetch = axios.create({
    baseURL: BaseURL.DEPLOY,
});

export default AxiosFetch;