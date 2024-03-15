import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";

function TopicsCard() {
  const { topicSlug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    getArticlesByTopic(topicSlug)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsErr(true);
        setIsLoading(false);
      });
  }, [topicSlug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isErr) {
    return <div>Error! 404 - Not Found</div>;
  } else {
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
}

export default TopicsCard;
