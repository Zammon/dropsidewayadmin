import axios from "axios";

const BaseURL = Object.freeze({
    LOCALHOST: 'https://localhost:7113/api/',
    DEPLOY: 'https://api.dropsideway.website/api/' 
})

const AxiosFetch = axios.create({
    baseURL: BaseURL.DEPLOY,
});

export default AxiosFetch;