import React, { useEffect, useState, useReducer, useContext } from "react";
import {
  MainContainer,
  UserProfile,
  UserSectionTop,
  Button,
  Li,
  Underline,
  UserSectionBottom,
  PostThumb,
  CarouselContainer,
} from "./Styles";
import { useParams, Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaSuitcase,
  FaPhone,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { PostCtx } from "./postcontext";
import Loading from "./Loading";

function Userpage() {
  const IDX = useParams();
  const [userInfo, setUserInfo] = useState();
  const [show, setShow] = useState(false);
  const sess = JSON.parse(sessionStorage.getItem("users"));
  const index = Number(IDX.id - 1);
  const { posts, setPosts } = useContext(PostCtx);
  const [sliderdIDX, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "prev":
        return MoveSliderPrev(state);
      default:
        return MoveSliderNext(state);
    }
  }

  function MoveSliderPrev(state) {
    if (state != 0) {
      return state - 1;
    }
    return (state = 0);
  }

  function MoveSliderNext(state) {
    if (state < 8) {
      return state + 1;
    }
    return (state = 8);
  }

  function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        filterPosts(data);
      })
      .catch((err) => console.log(err));
  }

  function filterPosts(stuff) {
    const findFilteredPosts = stuff.filter((user) => {
      return user.userId == IDX.id;
    });
    setPosts(findFilteredPosts);
  }

  useEffect(() => {
    setUserInfo(sess[index]);
    fetchPosts();
  }, []);

  if (!userInfo) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <UserProfile>
        <UserSectionTop>
          <div className="personal-container">
            <p>User n°{IDX.id}</p>
            <h1>
              {" "}
              <FaUser /> {userInfo.username}
            </h1>
            <h3 style={{ margin: "10px 0px", color: "orange" }}>
              {userInfo.name}
            </h3>
            <p>
              {" "}
              <GrLocation /> {userInfo.address.city},{" "}
              {userInfo.address.street + " " + userInfo.address.suite} <br />{" "}
              ZIPCODE: {userInfo.address.zipcode} <br />
              <FaEnvelope /> {userInfo.email}
            </p>
            <p style={{ height: "30px", padding: "10px 0px" }}>
              <FaPhone /> {show ? userInfo.phone : "HIDDEN"}
            </p>
            <Button onClick={() => setShow((prev) => !prev)}>
              {show ? "Hide Phone Number" : "Show Phone Number"}
            </Button>
          </div>
          <div style={{ textAlign: "end" }} className="company-container">
            <h1 style={{ color: "orange" }}>
              {" "}
              <FaSuitcase /> {userInfo.company.name}
            </h1>
            <p style={{ margin: "10px 0px" }}>
              {" "}
              {userInfo.company.catchPhrase}
            </p>
            <h1>
              <Li>{userInfo.website}</Li>{" "}
            </h1>
            <div className="todo-container">
              <Link to={`/profiles/${IDX.id}/todos`}>
                <h2
                  style={{
                    color: "orange",
                    margin: "30px 0px",
                    textDecoration: "underline",
                  }}
                >
                  Check Out {userInfo.name} Todos
                </h2>
              </Link>
              <Link to={`/profiles/${IDX.id}/albums`}>
                <h2
                  style={{
                    color: "orange",
                    margin: "30px 0px",
                    textDecoration: "underline",
                  }}
                >
                  Check Out {userInfo.name} Albums
                </h2>
              </Link>
            </div>
          </div>
        </UserSectionTop>
        <Underline></Underline>
        <h1>Latest Posts</h1>
        <UserSectionBottom>
          <CarouselContainer>
            <div
              className="CarouselSlider"
              style={{
                transform: `translateX(-${313 * sliderdIDX}px)`,
                transition: ".5s ease transform",
              }}
            >
              {posts.map((post) => {
                return (
                  <PostThumb key={post.id}>
                    <h3>{post.title.slice(0, 20)}</h3>
                    <p>{post.body.slice(0, 80) + "..."}</p>
                    <Link to={`/profiles/${IDX.id}/posts/${post.id}`}>
                      <Button className="button-post">See more</Button>
                    </Link>
                  </PostThumb>
                );
              })}
            </div>
          </CarouselContainer>
          <div className="button-container">
            <FaChevronLeft
              onClick={() => dispatch({ type: "prev" })}
              className="icon"
            />
            <FaChevronRight
              onClick={() => dispatch({ type: "next" })}
              className="icon"
            />
          </div>
        </UserSectionBottom>
      </UserProfile>
    </MainContainer>
  );
}

export default Userpage;
