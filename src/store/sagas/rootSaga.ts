import { all, fork } from 'redux-saga/effects';
import { authSaga } from './authSaga';

/** Compose feature sagas with `all`, `fork`, `takeEvery`, etc. */
export default function* rootSaga() {
    yield all([
        fork(authSaga),
    ]);
}
