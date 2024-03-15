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
      // const sortedArticles = response.sort((a, b) => {
      //   if (sortBy === "created_at") {
      //     return order === "asc"
      //       ? new Date(a.created_at) - new Date(b.created_at)
      //       : new Date(b.created_at) - new Date(a.created_at);
      //   } else if (sortBy === "comment_count") {
      //     return order === "asc"
      //       ? Number(a.comment_count) - Number(b.comment_count)
      //       : Number(b.comment_count) - Number(a.comment_count);
      //   } else if (sortBy === "votes") {
      //     return order === "asc" ? a.votes - b.votes : b.votes - a.votes;
      //   }
      //   return 0;
      // });
      function sorter(arr, sort_by, order) {
        return arr.sort((a, b) => {
          if (sort_by === "created_at") {
            if (order === "asc") {
              return new Date(a[sort_by]) - new Date(b[sort_by]);
            } else {
              return new Date(b[sort_by]) - new Date(a[sort_by]);
            }
          } else {
            if (order === "asc") {
              return Number(a[sort_by]) - Number(b[sort_by]);
            } else {
              return Number(b[sort_by]) - Number(a[sort_by]);
            }
          }
        });
      }
      const sortedArticleList = sorter(response, sortBy, order);
      setArticleList(sortedArticleList);
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
