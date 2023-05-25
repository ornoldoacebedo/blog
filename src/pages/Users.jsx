import React, { useState } from "react";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";

function Users() {
  const [userActive, setUserActive] = useState();
  return (
    <div class="row align-items-start">
      <div class="col-4">
        <UserList setUserActive={setUserActive} userActive={userActive} />
      </div>
      <div class="col-8">
        <UserDetails user={userActive} />
      </div>
    </div>
  );
}

export default Users;
