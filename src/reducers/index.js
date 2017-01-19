import { combineReducers } from 'redux';
import dataReducer from './data.reducer';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
    data: dataReducer,
    router: authReducer
});

export default rootReducer;