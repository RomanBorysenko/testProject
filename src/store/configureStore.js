import { createStore, applyMiddleware, compose } from 'redux';
//import rootReducer from '../reducers/index';
import testApp from '../reducers/index';
//import server from '../middlewares/server';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

const createStoreWithMiddleware =
    applyMiddleware(
        apiMiddleware
    )(createStore);

export default function configureStore() {
    return createStoreWithMiddleware(testApp);
}