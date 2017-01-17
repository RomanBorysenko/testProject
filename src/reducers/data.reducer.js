//import {
//    GET_DATA
//} from '../actions/data.action';

//import { createReducer, newStateWithResponse } from './utils';
//import { defaultInitState } from '../store/initState';

/*
export default createReducer({
    [GET_DATA]: (state, { res }) => {
        return newStateWithResponse(res);
    }
})*/

const GET_DATA = 'GET_DATA';

export default dataReducer = (state = 'test', action) => {
    switch (action.type) {
        case 'GET_DATA':
            return state;
        default:
            return state;
    }
}
