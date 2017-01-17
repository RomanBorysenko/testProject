const GET_DATA = 'GET_DATA';

export default dataReducer = (state = 'test', action) => {
    switch (action.type) {
        case 'GET_DATA':
            return state;
        default:
            return state;
    }
}
