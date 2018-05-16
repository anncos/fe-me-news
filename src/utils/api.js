// helpers
const fetchJson = url => fetch(url).then(res => res.json());
const first10 = arr => arr.slice(0, 10);

// Items Ids Endpoint https://hacker-news.firebaseio.com/v0/topstories.json
const getItems = () => {
  return fetchJson('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => { return first10(res)});
  
  // TODO: fetch the endpoint, get first 10, return it
};

// Item endpoint https://hacker-news.firebaseio.com/v0/item/8863.json
const getItem = (id) => {
  return fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  // TODO: fetch relevant item, return it
}

export const api = {
  getItems,
  getItem,
}