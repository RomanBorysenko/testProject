import { CALL_API } from 'redux-api-middleware';

export const ADD_CARD = 'ADD_CARD';
export const GET_CARDS = 'GET_CARDS';

export function addCard(data) {
    return {
        url: 'http://localhost:8081/add_card',
        type: ADD_CARD,
        res: '',
        data: {
            ...data
        }
    }
};

export function getCards() {
    return {
        url: 'http://localhost:8081/cards',
        type: GET_CARDS,
        res: ''
    }
};
