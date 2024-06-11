import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Viktigt inlägg",
      text: "Det här är det viktigaste som skrivits någonsin",
      author: "Bloggad",
    },
    {
      id: 2,
      title: "Ett blogginlägg",
      text: "Hej hej ett fint blogginlägg kommentera gärna",
      author: "johndoe@mail.se",
    },
    {
      id: 3,
      title: "Ett till blogginlägg",
      text: "HEJ HEJ vilket bra och kul inlägg detta är",
      author: "janedoe@mail.se",
    },
  ]);

  return (
    <PostContext.Provider value={{ blogs, setBlogs }}>
      {props.children}
    </PostContext.Provider>
  );
};