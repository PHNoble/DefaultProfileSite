import axios from "axios";

export const getUserPublicData = username => {
  return axios({
    method: "GET",
    url: `https://api.github.com/users/${username}`
  })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return {};
    });
};

export const getUserRepos = username => {
  return axios({
    method: "GET",
    url: `https://api.github.com/users/${username}/repos`
  })
    .then(response => {
      return response;
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
      return response;
    })
    .catch(err => {
      return {};
    });
};
