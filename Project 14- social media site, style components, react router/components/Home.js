import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import UserThumbnail from "./UserThumbnail";

function Home() {
  const [users, setUsers] = useState([]);

  function fetchUsers() {
    if (!users || users.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          sessionStorage.setItem("users", JSON.stringify(data));
          getSessionS();
        })
        .catch((err) => console.log(err));
    } else {
      getSessionS();
    }
  }

  function getSessionS() {
    const usersFound = JSON.parse(sessionStorage.getItem("users"));
    setUsers(usersFound);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!users || users.length === 0) {
    return <Loading />;
  }

  return (
    <div className="thumbnail-container">
      {users ? (
        users.map((user, idx) => {
          return <UserThumbnail key={user.id} prop={user} />;
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Home;
