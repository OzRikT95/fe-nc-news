import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <li>
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <Link to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} alt="article img" />
      </Link>
      <p>Votes: {article.votes}</p>
    </li>
  );
}

export default ArticleCard;
