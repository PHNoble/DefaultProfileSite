import axios from "axios";
import * as utils from "./utils/index";

export const getUserPublicData = username => {
  return axios({
    method: "GET",
    url: `https://api.github.com/users/${username}`
  })
    .then(response => {
      return utils.parseGit(response.data);
    })
    .catch(err => {
      return {};
    });
};

export const getUserRepos = username => {
  const params = {
    type: 'all'
  }
  return axios({
    method: "GET",
    url: `https://api.github.com/users/${username}/repos`,
    params,
  })
    .then(response => {
      return utils.parseRepos(response.data);
    })
    .catch(err => {
      return [];
    });
};

export const getCommitActivity = (username, repo) => {
  return axios({
    method: "GET",
    url: `https://api.github.com/repos/${username}/${repo}/stats/participation`
  })
    .then(response => {
      var data = {};
      data[repo] = response.data;
      return data;
    })
    .catch(err => {
      return {};
    });
};
