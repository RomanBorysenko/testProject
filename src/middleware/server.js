export default store => next => action => {

    if (action.type === 'GET_AUTH') {
        const regData = action.data;
        let authData = require('../static/auth.json');
        for (let value of authData) {
           if (regData.login == value.phoneNumber && regData.password === value.password) {
               action.res = {
                   status: 'OK',
                   target: 'dashBoard'};
           }
        }

        !action.res ? action.res =  {
            status: 'OK',
            target: 'registration'
        } : '';

        return next(action);
    }
    if (action.type === 'SAVE_USER') {
        action.res =  {
            status: 'OK',
            target: 'dashBoard'
        };
        return next(action);
    }
    if (action.type === 'ADD_CARD') {
        action.res =  {
            status: 'OK',
            target: 'dashBoard'
        };
        return next(action);
    }
    if (action.type === 'GET_CARDS') {
        let cards = require('../static/cards.json');
            action.res = cards;
        return next(action);
    }
}
