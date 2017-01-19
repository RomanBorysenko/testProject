import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
//import testApp from '../reducers/index';
import middlewares from '../middleware';

const createStoreWithMiddleware = compose(
    middlewares
)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}