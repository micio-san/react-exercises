import React, { createContext, useState } from "react";

export const PostCtx = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  return (
    <PostCtx.Provider value={{ posts, setPosts }}>{children}</PostCtx.Provider>
  );
}

export default PostProvider;
