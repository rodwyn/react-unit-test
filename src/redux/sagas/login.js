import { put, call, takeLatest } from 'redux-saga/effects';

import {
  GET_OAUTH_GITHUB_TOKEN_START,
  GET_OAUTH_GITHUB_TOKEN_SUCCESS,
  GET_OAUTH_GITHUB_TOKEN_ERROR,
} from '../../consts/actionTypes';

export function* getGithubToken({ payload }) {
  try {
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_SUCCESS });
  } catch (error) {
    yield put({ type: GET_OAUTH_GITHUB_TOKEN_ERROR});
  }
}

export default function* login() {
  yield takeLatest(GET_OAUTH_GITHUB_TOKEN_START, getGithubToken);
}
