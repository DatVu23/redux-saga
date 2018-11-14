import * as types from '../constants/ActionTypes';

export const requestData = () => {
    return function(dispatch) {
        dispatch({
            type: types.REQUEST_DATA,
        })
    }
};

export const getData = data => ({
    type: types.RECEIVE_DATA,
    data,
});