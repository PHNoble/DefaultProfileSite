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
    yield put({ type: actions.setData, payload: details});
    const user = details.username;
    const repos = yield call(getUserRepos, user);
    yield put({ type: actions.setRepos, payload: repos});
    const names = repos.map((repo) => {
      return repo.name;
    })
    const stats = []
    for(let i = 0; i < names.length; i++) {
      stats.push(yield call(getCommitActivity, user, names[i]))
    }
    yield put({ type: actions.setStats, stats })
};

const GitSaga = function* Git() {
  yield takeEvery(actions.getData, getDataAction);
};

export default GitSaga;
