import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [blogs, setBlogs] = useState([
  ]);

  return (
    <PostContext.Provider value={{ blogs, setBlogs }}>
      {props.children}
    </PostContext.Provider>
  );
};