import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";

function TopicsCard() {
  const { topicSlug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic(topicSlug).then((articles) => {
      setArticles(articles);
    });
  }, [topicSlug]);

  return (
    <div>
      <h2>Articles in {topicSlug}</h2>
      <ul>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
}

export default TopicsCard;
