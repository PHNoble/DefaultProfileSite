import { createAction, handleActions } from "redux-actions";

export const actions = {
  getData: "DATA/QUERY_DATA",
  setData: "DATA/SET_DATA",
  setRepos: "DATA/SET_REPOS",
  setStats: "DATA/SET_STATS"
};

export const getData = createAction(actions.getData);
export const setData = createAction(actions.setData);
export const setRepos = createAction(actions.setRepos);
export const setStats = createAction(actions.setStats);

const INITIAL_STATE = {
  details: {},
  repos: [],
  stats: []
};

export default handleActions(
  {
    [actions.setData]: (state, action) => {
      const details = action.payload;
      return {
        ...state,
        details
      };
    },
    [actions.setRepos]: (state, action) => {
      const repos = action.payload;
      return {
        ...state,
        repos
      };
    },
    [actions.setStats]: (state, action) => {
      const stats = action.payload;
      return {
        ...state,
        stats
      };
    }
  },
  INITIAL_STATE
);
