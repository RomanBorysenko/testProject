import { createReducer } from './utils';
const GET_AUTH = 'GET_AUTH';
const SAVE_USER = 'SAVE_USER';

export default createReducer({
    [GET_AUTH]: (state, action) => {
        return state.set('router', action.res.target);
    },
    [SAVE_USER]: (state, action) => {
        return state.set('router', action.res.target);
    }
});
