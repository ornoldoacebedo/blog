import React, { useEffect, useState } from "react";

function AccordionCommentsList(props) {
  const [comments, setComments] = useState([]);
  const { post } = props;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  });
  return (
    <div class="accordion" id="accordionExample">
      <h2>Post comment list </h2>

      {comments.map((comment) => {
        return (
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                {comment.name}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">{comment.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AccordionCommentsList;
