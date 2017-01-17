import { applyMiddleware } from 'redux';
import server from './server';
import server2 from './server';
import thunk from 'redux-thunk';

const middleware = [server, server2];

export default applyMiddleware(
    ...middleware
);