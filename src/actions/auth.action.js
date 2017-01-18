import { CALL_API } from 'redux-api-middleware';

export const GET_AUTH = 'GET_AUTH';

export function getAuth(login, password) {
    return {
        url: 'http://localhost:8081/login',
        type: GET_AUTH,
        res: '',
        data: {
            login,
            password
        }
    }
};