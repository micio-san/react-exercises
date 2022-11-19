import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
import { Button } from "./Styles";

import {
  MainContainer,
  PostThumb,
  Underline,
  UserProfile,
  UserSectionBottomComm,
} from "./Styles";

function Album() {
  const params = useParams();
  const [album, setAlbum] = useState([]);

  const User = () => {
    const sess = JSON.parse(sessionStorage.getItem("users"));
    return sess.filter((user) => {
      return user.id == params.id;
    });
  };

  function fetchAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        filterAlbums(data);
      })
      .catch((err) => err);
  }

  function filterAlbums(data) {
    const newData = data.filter((album) => {
      return album.userId == User()[0].id;
    });
    setAlbum(newData);
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (!album || album.length == 0) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <UserProfile>
        <h2>
          <Link to={`/profiles/${params.id}`}>{User()[0].name} </Link>/ Album
        </h2>
        <Underline></Underline>
        <UserSectionBottomComm style={{ height: "90%" }}>
          {album.map((one) => {
            return (
              <PostThumb style={{ margin: "10px 0px" }} key={one.id}>
                <h1>{one.title}</h1>
                <Link to={`/profiles/${User()[0].id}/albums/${one.id}`} ><Button>View Album</Button></Link>
              </PostThumb>
            );
          })}
        </UserSectionBottomComm>
      </UserProfile>
    </MainContainer>
  );
}

export default Album;
