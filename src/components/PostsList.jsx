import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//const URL_POSTS = `https://jsonplaceholder.typicode.com/posts?userId=${user}`;

function PostList(props) {
  const [posts, setPosts] = useState([]);
  const { user } = props;
  const navegateTo = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [posts]);
  return (
    <>
      <h4>Post list from user {user.name}</h4>
      <ul class="list-group">
        {posts.map((post) => {
          return (
            <li
              class="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => navegateTo("/users/post", { state: { post } })}
            >
              {post.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PostList;
