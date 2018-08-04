import axios from "axios";

export const getUserPublicData = username => {
  axios({
    method: "GET",
    url: `https://api.github.com/users/${username}`
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      return {}
    });
};

export const getUserRepos = username => {
  axios({
    method: "GET",
    url: `https://api.github.com/users/${username}/repos`
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      return []
    });
};

export const getCommitActivity = (username, repo) => {
    axios({
      method: "GET",
      url: `https://api.github.com/repos/${username}/${repo}/stats/participation`
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        return {}
      });
  };
  
