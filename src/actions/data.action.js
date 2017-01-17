import { CALL_API } from 'redux-api-middleware';

export const GET_DATA = 'GET_DATA';


export function getData(testData) {
    return {
        [CALL_API]: {
            endpoint: 'http://localhost:3000/api/login',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            types: [
                'REQUEST',
                {
                    type: GET_DATA
                },
                {
                    type: GET_DATA
                }]
        }
    }
};