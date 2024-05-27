import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import useInput from "../hooks/useInput";
import { AuthContext } from "../context/AuthContext";

const CreatePost = () => {
  const { currentUser } = useContext(AuthContext);
  const titleInput = useInput();
  const textInput = useInput();
  const { blogs, setBlogs } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const maxId =
      blogs.length > 0 ? Math.max(...blogs.map((blog) => blog.id)) : 0;

    setBlogs([
      ...blogs,
      {
        id: maxId + 1,
        title: titleInput.value,
        text: textInput.value,
        author: currentUser.email,
      },
    ]);
    titleInput.reset();
    textInput.reset();
  };
  return (
    <div className="blogPosts">
      <div className="makeBlogPost">
        <form onSubmit={handleSubmit}>
        <div className="column">
          <h1>Skriv ett inlägg</h1>
          <p>Titel på inlägg</p>
          <input
            type="text"
            placeholder="Skriv din titel här..."
            {...titleInput}
          />
          <p>Skriv ditt meddelande här</p>
          <textarea
            placeholder="Skriv ditt inlägg här..."
            {...textInput}
          />
          <button type="submit"
          className="primaryPostBtn">
            Publicera inlägg
          </button>
          </div>
        </form>
        </div>
      </div>
  );
};

export default CreatePost;