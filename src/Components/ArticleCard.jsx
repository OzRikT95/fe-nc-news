function ArticleCard({ article }) {
  return (
    <>
      <li>
        <h3>{article.title}</h3>
        <img src={article.article_img_url} alt="article img" />
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>{article.body}</p>
      </li>
    </>
  );
}

export default ArticleCard;
