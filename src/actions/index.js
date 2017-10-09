const KEYS = {
  id: '9683c68e0c0e8ebf0ceb',
  secret: 'ab38e7a382c59d62a0c25f9094048fe2b6d6dca8'
}

export const FETCH_GITHUB = 'FETCH_GITHUB';
export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_FULLFILLED = 'FETCH_FULLFILLED';

export function fetchGithub () {
  return {
    type: FETCH_GITHUB,
    payload: new Promise(resolve => {
      let pageNum = 1;
      fetch(`https://api.github.com/repos/reactjs/redux/contributors?anon=1&per_page=100&page=${pageNum}`)
        .then(response => {
          resolve(response.json());
        })
    })
  }
}
