export default store => next => action => {

    if (action.type === 'GET_AUTH') {
        const regData = action.data;
        let authData = require('../static/auth.json');
        for (let value of authData) {
           if (regData.login == value.phoneNumber && regData.password === value.password) {
               action.res = {
                   status: 'OK',
                   target: 'dashboard'};
           }
        }

        !action.res ? action.res =  {
            status: 'OK',
            target: 'registration'
        } : '';

        return next(action);
    }
    else {
        return next(action);
    }
}
