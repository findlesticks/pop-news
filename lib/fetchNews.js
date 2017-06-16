import axios from 'axios';
let API_KEY;

if (process.env.NODE_ENV === 'production') {
  API_KEY = process.env.newsApiKey;
} else {
  API_KEY = require('./apiKey').default;
}

export default function fetchNews(source, numberOfArticles = 10) {
  const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=latest&apiKey=${API_KEY}`;
  return axios.get(url).then(res => ({
    articles: res.data.articles.slice(0, numberOfArticles),
    source: res.data.source
  }));
};
