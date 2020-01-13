import { takeEvery } from 'redux-saga/effects';

import {
    FETCH_CONFIG,
} from '../constants';

// import { } from 'actions';


function* fetchConfig() {

    console.log('TOOD: replace config fetch with Parse')
    
    yield;
}


export default function* () {
    yield [
        takeEvery(FETCH_CONFIG, fetchConfig),
    ];
}