import { call, put, takeEvery, takeLatest, select } from "redux-saga/effects";
import {
  getUserPublicData,
  getUserRepos,
  getCommitActivity
} from "../../api/github";
import { actions } from "../gitreducer";

const getDataAction = function*(action) {
    const username = action.payload; 
    const details = yield call(getUserPublicData, username);
    console.log(details)
};

const GitSaga = function* Git() {
  yield takeEvery(actions.getData, getDataAction);
};

export default GitSaga;
