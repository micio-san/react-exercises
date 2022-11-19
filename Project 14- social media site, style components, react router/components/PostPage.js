import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CommentContainer,
  PostContainer,
  UserProfile,
  MainContainer,
  UserSectionTop,
  Underline,
  UserSectionBottomComm,
} from "./Styles";
import { PostCtx } from "./postcontext";
import Loading from "./Loading";

function PostPage() {
  const param = useParams();
  const { posts, setPosts } = useContext(PostCtx);
  const [comments, setComments] = useState([]);

  function Username() {
    const users = JSON.parse(sessionStorage.getItem("users"));
    const userID = users.filter((user, idx) => {
      return user.id === posts[0].userId;
    });
    return userID[0];
  }

  const Post = () =>
    posts.filter((post) => {
      return post.id == param.id;
    });

  function fetchComments() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => filterComments(data))
      .catch((err) => console.log(err));
  }

  function filterComments(data) {
    const ass = data.filter((comment) => {
      return comment.postId == Post()[0].id;
    });
    setComments(ass);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  if (!posts || posts.length === 0) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <UserProfile>
        <h2>
          <Link to={`/profiles/${Username().id}`}>{Username().name}</Link> /Post
        </h2>
        <UserSectionTop style={{ height: "30%" }}>
          <PostContainer>
            <h1>{Post()[0].title}</h1>
            <p>{Post()[0].body}</p>
          </PostContainer>
        </UserSectionTop>
        <Underline></Underline>
        <UserSectionBottomComm>
          <h1 style={{ marginBottom: "10px" }}>
            {" "}
            <span style={{ color: "orange" }}>{comments.length}</span>{" "}
            {comments.length >= 1 ? " Comments" : " Comment"}
          </h1>
          {comments.map((comment) => {
            return (
              <CommentContainer key={comment.id}>
                <h2 style={{ color: "orange", fontSize: "15px" }}>
                  {comment.name}
                </h2>
                <p style={{ margin: "10px 0px" }}>{comment.body}</p>
              </CommentContainer>
            );
          })}
        </UserSectionBottomComm>
      </UserProfile>
    </MainContainer>
  );
}

export default PostPage;
