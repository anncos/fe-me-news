// helpers
const fetchJson = url => fetch(url).then(res => res.json());
const first10 = arr => arr.slice(0, 10);

const getItems = () => {
  return fetchJson('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => { return first10(res)});
};

const getItem = (id) => {
  return fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
}

export const api = {
  getItems,
  getItem,
}