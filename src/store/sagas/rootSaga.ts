import { all } from 'redux-saga/effects';

/** Compose feature sagas with `all`, `fork`, `takeEvery`, etc. */
export default function* rootSaga() {
    yield all([]);
}
