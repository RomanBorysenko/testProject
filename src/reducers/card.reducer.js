import Immutable from 'immutable';
import { createReducer } from './utils';
const GET_CARDS = 'GET_CARDS';

export default createReducer({
    [GET_CARDS]: (state, action) => {
        return state.set('cards', Immutable.fromJS(action.res));
    }
});
