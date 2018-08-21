export const parseGit = data => {
  return {
    username: data.login,
    url: data.html_url,
    name: data.name,
    repos: data.public_repos,
    bio: data.bio,
    picture: data.avatar_url
  };
};

export const parseRepos = data => {
  const repos = data.map(obj => {
    return {
      id: obj.id,
      url: obj.html_url ? obj.html_url : '',
      watchers: obj.watchers ? obj.watchers : 0,
      license: obj.license ? obj.license.name :'',
      language: obj.language ? obj.language : '',
      name: obj.name ? obj.name : '',
      owner: obj.owner.login
    };
  });
  return repos;
};
