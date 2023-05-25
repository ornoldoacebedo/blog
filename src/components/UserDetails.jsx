import React from "react";
import PostList from "./PostsList";

function UserDetails(props) {
  const { user } = props;

  if (!user) {
    return <p>Select a user</p>;
  }

  return (
    <>
      <h1>{user.name}</h1>
      <h4>{user.email}</h4>

      <PostList user={user} />
    </>
  );
}

export default UserDetails;
