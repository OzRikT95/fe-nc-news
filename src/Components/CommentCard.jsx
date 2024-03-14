function CommentCard({ comment, delComment, loggedInUsername }) {
  const CorrectUser = comment.author === loggedInUsername;

  return (
    <li className="comment-card">
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      <p>{comment.created_at}</p>
      {CorrectUser && (
        <button onClick={() => delComment(comment.comment_id)}>Delete</button>
      )}
    </li>
  );
}

export default CommentCard;
