export default store => next => action => {
    console.log('in middleware 2', action);
    return next(action);
}