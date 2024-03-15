import { useEffect } from "react";
import { useState } from "react";
import {
  deleteComment,
  getCommentsByArticleId,
  postComment,
} from "../utils/api";
import CommentCard from "./CommentCard";

function CommentsList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const loggedInUsername = "tickle122";

  function handleSubmit(event) {
    const loggedInUsername = "tickle122";
    event.preventDefault();
    setComments((currComments) => {
      return [
        {
          author: loggedInUsername,
          body: commentText,
          votes: 0,
          created_at: new Date().toTimeString(),
        },
        ...currComments,
      ];
    });
    postComment(articleId, loggedInUsername, commentText).then(
      (emptyCommentText) => {
        setCommentText("");
      }
    );
  }

  useEffect(() => {
    getCommentsByArticleId(articleId).then((response) => {
      setComments(response.comments);
    });
  }, [articleId]);

  const delComment = (commentId) => {
    deleteComment(commentId)
      .then(() => {
        setComments(
          comments.filter((comment) => comment.comment_id !== commentId)
        );
      })
      .catch((err) => {
        alert("Failed to delete comment!");
      });
  };

  return (
    <div>
      <section className="list">
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(event) => {
              setCommentText(event.target.value);
            }}
            placeholder="Add a comment.."
            required
            id="textarea"
          ></textarea>
          <button type="submit">Add Comment</button>
        </form>
      </section>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <CommentCard
            key={index}
            comment={comment}
            delComment={delComment}
            loggedInUsername={loggedInUsername}
          />
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
