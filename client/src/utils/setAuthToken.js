import axios from 'axios';
import baseUrl from './config';

const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;

    } else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

export const getUrl = path => {
    return `${baseUrl}/${path}`;
}

export default setAuthToken;