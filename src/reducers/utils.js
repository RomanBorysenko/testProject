/**
 * An elegant way to write reducers
 * Best practice - http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-reducers
 * @param handlers the functions map
 * @param initialState initiate state
 * @returns {Function}
 */

export function createReducer(handlers, initialState = {}) {
    if (typeof handlers !== 'object') {
        throw new Error('handlers need to be a object');
    }

    return (state = initialState, action) => handlers.hasOwnProperty(action.type) ?
        handlers[action.type](state, action) :
        handlers.hasOwnProperty('*') ? handlers['*'](state, action) :
            state;
}
