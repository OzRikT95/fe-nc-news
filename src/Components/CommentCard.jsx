function CommentCard({ comment }) {
  return (
    <li>
      <p>{comment.author}</p>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      <p>{comment.created_at}</p>
    </li>
  );
}

export default CommentCard;
