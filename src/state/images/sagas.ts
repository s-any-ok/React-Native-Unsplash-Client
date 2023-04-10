import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {ImagesActionTypes} from './types';
import {fetchError, fetchSuccess} from './actions';
import {fetchImages} from '../../utils/api';

function* handleFetch() {
  try {
    // @ts-ignore
    const res = yield call(fetchImages);

    if (res.error) {
      yield put(fetchError(res.error));
    } else {
      yield put(fetchSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchError(err.stack));
    } else {
      yield put(fetchError('An unknown error occured.'));
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(ImagesActionTypes.FETCH_REQUEST, handleFetch);
}

function* imagesSaga() {
  yield all([fork(watchFetchRequest)]);
}

export default imagesSaga;
