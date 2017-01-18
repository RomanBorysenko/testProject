const GET_DATA = 'GET_DATA';
const GET_AUTH = 'GET_AUTH';

export default dataReducer = (state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return state;
        case 'GET_AUTH':
            return state.update('router', action.res);
        default:
            return state ? state : {};
    }
}
