import axios from 'axios';

const apiRoute = '/api/developer';
const ENDPOINTS = {
    getDocApi: () => `${apiRoute}/documentation`,
    getDocByParams: ({apiName, id}) => `${apiRoute}/${apiName}/${id}`,
}

export const getDocumentationList = () => {
    return new Promise((resolve, reject) => {
        axios.get(ENDPOINTS.getDocApi())
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