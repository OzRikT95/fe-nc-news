import axios from "axios";

const ncAPI = axios.create({
  baseURL: "https://nc-news-nwp8.onrender.com",
});

export function getArticleList() {
  return ncAPI
    .get(`/api/articles`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getArticleById(articleId) {
  return ncAPI
    .get(`/api/articles/${articleId}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
