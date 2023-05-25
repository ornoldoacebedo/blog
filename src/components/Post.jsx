import React, { useState } from "react";
import CommentsList from "./CommentsList";
import { useLocation } from "react-router-dom";
import AccordionCommentsList from "./AccordionCommentsList";

function Post(props) {
  const location = useLocation();
  const post = location.state.post;

  //const { post } = props;
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <AccordionCommentsList post={post} />
    </>
  );
}

export default Post;
// <CommentsList post={post} />
