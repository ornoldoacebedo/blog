import classNames from "classnames";
import React, { useEffect, useState } from "react";

const URL_USERS = "https://jsonplaceholder.typicode.com/users";

function UserList(props) {
  const [users, setUsers] = useState([]);
  const { userActive, setUserActive } = props;

  useEffect(() => {
    fetch(URL_USERS)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul className="list-group">
      {users.map((user) => {
        return (
          <li
            className={classNames({
              "list-group-item": true,
              active: user.id === userActive?.id,
            })}
            onClick={() => setUserActive(user)}
            style={{ cursor: "pointer" }}
          >
            {user.name}
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
