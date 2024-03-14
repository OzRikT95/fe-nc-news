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

export function getCommentsByArticleId(articleId) {
  return ncAPI
    .get(`/api/articles/${articleId}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err);
    });
}

export function updateArticleVote(articleId, updateVote) {
  return ncAPI
    .patch(`/api/articles/${articleId}`, { new_votes: updateVote })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}

export function postComment(articleId, body) {
  const username = "tickle122";
  return ncAPI
    .post(`/api/articles/${articleId}/comments`, {
      username,
      body,
    })
    .then((response) => {
      console.log(response.data.comment);
      return response.data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
}
