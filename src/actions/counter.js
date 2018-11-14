import * as types from '../constants/ActionTypes';

export const increment = count => ({
    type: types.INCREMENT,
    count
});

export const decrement = count => ({
    type: types.DECREMENT,
    count
})