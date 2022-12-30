import { all } from 'redux-saga/effects'
import post from './post';

function* rootSaga() {
    yield all([...post])
}

export default rootSaga
