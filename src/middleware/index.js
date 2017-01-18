import { applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import server from './server';
import server2 from './server';
import thunk from 'redux-thunk';

const middleware = [server, apiMiddleware];

export default applyMiddleware(
    ...middleware,
    thunk
);