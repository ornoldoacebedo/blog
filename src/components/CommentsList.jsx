import React, { useEffect, useState } from "react";

const URL_COMMENTS = "https://jsonplaceholder.typicode.com/comments?postId=1";

function CommentsList(props) {
  const [comments, setComments] = useState([]);
  const { post } = props;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  });

  return (
    <>
      <h2>Post comment list </h2>
      <ul class="list-group">
        {comments.map((comment) => {
          return <li class="list-group-item">{comment.name}</li>;
        })}
      </ul>
    </>
  );
}

export default CommentsList;
