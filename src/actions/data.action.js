import { CALL_API } from 'redux-api-middleware';

export const GET_DATA = 'GET_DATA';


export function getData(testData) {
    return {
        [CALL_API]: {
            endpoint: 'http://www.example.com/api/users',
            method: 'GET',
            types: [
                'REQUEST',
                {
                    type: GET_DATA,
                },
                'FAILURE']
        }
    }
};