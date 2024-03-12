import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVote } from "../utils/api";
import CommentsList from "./CommentsList";

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [voteCount, setVoteCount] = useState(null);
  const { articleId } = useParams();

  const handleVote = (updateVote) => {
    setVoteCount((currCount) => {
      return currCount + updateVote;
    });
    updateArticleVote(article.article_id, updateVote).catch((err) => {
      setVoteCount((currCount) => {
        return currCount - updateVote;
      });
      alert("Failed to update vote!");
    });
  };

  useEffect(() => {
    getArticleById(articleId).then(({ article }) => {
      setArticle(article);
      setVoteCount(article.votes);
    });
  }, []);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} />
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <div>
        <span>Votes: {voteCount}</span>
        <button onClick={() => handleVote(1)}>Upvote</button>
        <button onClick={() => handleVote(-1)}>Downvote</button>
      </div>
      <p>Comments: {article.comment_count}</p>
      <section>
        <CommentsList articleId={articleId} />
      </section>
    </article>
  );
}

export default ArticlePage;
