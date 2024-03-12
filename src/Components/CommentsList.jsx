import { useEffect } from "react";
import { useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

function CommentsList({ articleId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(articleId).then((response) => {
      setComments(response.comments);
    });
  }, []);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
}

export default CommentsList;
