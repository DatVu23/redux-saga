import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { getData } from '../actions/data';
import axios from 'axios';

const fetchData = async(url) => {
    try {
        const res = await axios.get('https://randomuser.me/api/');
        // const data = await res.toJson();
        const userName = await res.data.results[0];
        return userName;
    } catch (error) {
        console.log(error)
    }
}

function* fetchUser(action) {
    try {
        const userName = yield call(fetchData, action.data);
        yield put(getData(userName));
    } catch (error) {
        console.log(error);
    }
}

export default function* Saga() {
    yield takeEvery(types.REQUEST_DATA, fetchUser);
}