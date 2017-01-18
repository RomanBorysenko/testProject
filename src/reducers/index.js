import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import Immutable from 'immutable';
import dataReducer from './data.reducer';

export { dataReducer };

const testApp = combineReducers({
    data: dataReducer
});

export default testApp;