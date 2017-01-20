import { combineReducers } from 'redux';
import dataReducer from './data.reducer';
import authReducer from './auth.reducer';
import cardReducer from './card.reducer';

const rootReducer = combineReducers({
    data: dataReducer,
    router: authReducer,
   // router: cardReducer,
    cards: cardReducer
});

export default rootReducer;