import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticles, getArticleList } from "../utils/api";
import { useSearchParams } from "react-router-dom";
import SortList from "./SortList";

function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const topic = searchParams.get("topic");

  useEffect(() => {
    fetchArticles({ sortBy, order, topic }).then((response) => {
      const sortedArticles = response.sort((a, b) => {
        if (sortBy === "created_at") {
          return order === "asc"
            ? new Date(a.created_at) - new Date(b.created_at)
            : new Date(b.created_at) - new Date(a.created_at);
        } else if (sortBy === "comment_count") {
          const orderString =
            order === "asc"
              ? a.comment_count - b.comment_count
              : b.comment_count - a.comment_count;
          return orderString.toString();
        } else if (sortBy === "votes") {
          return order === "asc" ? a.votes - b.votes : b.votes - a.votes;
        }
        return 0;
      });
      setArticleList(sortedArticles);
    });
  }, [searchParams, sortBy, order]);

  function newParams(newSortBy, newOrder) {
    setSearchParams({ sort_by: newSortBy, order: newOrder });
  }
  return (
    <section>
      <h2>Article List</h2>
      <SortList sortBy={sortBy} order={order} />
      <ul>
        {articleList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
}

export default ArticleList;
