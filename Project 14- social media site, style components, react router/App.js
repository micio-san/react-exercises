import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Userpage from "./components/Userpage";
import PostPage from "./components/PostPage";
import "./style.css";
import PostProvider from "./components/postcontext";
import TodosList from "./components/TodosList";
import Album from "./components/Album";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <>
      <Navbar />
      <PostProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profiles/:id" element={<Userpage />}></Route>
          <Route path="/profiles/:id/posts/:id" element={<PostPage />}></Route>
          <Route path="/profiles/:id/todos" element={<TodosList />}></Route>
          <Route path="/profiles/:id/albums" element={<Album />}></Route>
          <Route
            path="/profiles/:id/albums/:id"
            element={<ImageGallery />}
          ></Route>
        </Routes>
      </PostProvider>
    </>
  );
}

export default App;
