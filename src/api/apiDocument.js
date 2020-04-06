import axios from 'axios';

const apiRoute = '/api/developer';
const ENDPOINTS = {
    getDocApi: (page, limit) => `${apiRoute}/documentation?page=${page}&limit=${limit}`,
    getDocByParams: ({apiName, id}) => `${apiRoute}/${apiName}/${id}`,
}

export const getDocumentationList = (page = 1, limit = 10) => {
    return new Promise((resolve, reject) => {
        axios.get(ENDPOINTS.getDocApi(page, limit))
        .then(res => {
            resolve(res.data);
        })
        .catch(error => {
            reject(error);
        })
    })
}

export const getDocumentById = ({apiName, id}) => {
    return new Promise((resolve, reject) => {
        axios.get(ENDPOINTS.getDocByParams({apiName, id}))
        .then(res => {
            resolve(res.data);
        })
        .catch(error => {
            reject(error);
        })
    })
}