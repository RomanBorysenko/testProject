import { createStore, applyMiddleware, compose } from 'redux';
//import rootReducer from '../reducers/index';
import testApp from '../reducers/index';
//import server from '../middlewares/server';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import middlewares from '../middleware';

const createStoreWithMiddleware = compose(
    middlewares
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(testApp, initialState);
}