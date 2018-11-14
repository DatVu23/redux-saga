import * as types from '../constants/ActionTypes';

const initalState = {
    data: {}
}
export default function(state = initalState, action) {
    console.log(action);
    switch(action.type) {
        case types.REQUEST_DATA:
            return {
                ...state,
                data: action.data
            }
        case types.RECEIVE_DATA:
        return {
            ...state,
            data: action.data
        }
        default: return state;
    }
}