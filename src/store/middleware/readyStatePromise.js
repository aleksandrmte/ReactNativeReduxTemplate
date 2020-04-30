export const readyStatePromise = store => next => action => {
    if (!action.promise) {
        return next(action);
    }

    function makeAction(status, data) {
        let newAction = Object.assign({}, action, {status: status}, data);
        delete newAction.promise;
        return newAction;
    }

    next(makeAction(results.ASYNC_RESULT_PENDING));
    return action.promise.then(
        result => next(makeAction(results.ASYNC_RESULT_SUCCESS, {result})),
        error => next(makeAction(results.ASYNC_RESULT_ERROR, {error}))
    );
};

export const results = Object.freeze({
    ASYNC_RESULT_NONE: 'ASYNC_RESULT_NONE',
    ASYNC_RESULT_PENDING: 'ASYNC_RESULT_PENDING',
    ASYNC_RESULT_SUCCESS: 'ASYNC_RESULT_SUCCESS',
    ASYNC_RESULT_ERROR: 'ASYNC_RESULT_ERROR',
});