import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import Comments from "./Comments";
import { AuthContext } from "../context/AuthContext";

const ReadMyPosts = () => {
  const { blogs, setBlogs } = useContext(PostContext);
  const { currentUser } = useContext(AuthContext);
  const [editingBlog, setEditingBlog] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog.id);
    setNewTitle(blog.title);
    setNewText(blog.text);
  };

  const handleSave = (id) => {
    const updatedBlogs = blogs.map((blog) =>
      blog.id === id ? { ...blog, title: newTitle, text: newText } : blog
    );
    setBlogs(updatedBlogs);
    setEditingBlog(null);
  };

  return (
    <div className="blogPosts">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="blogPost">
            {editingBlog === blog.id ? (
              <div className="column">
                <h1>Titel</h1>
                <input
                  className="postTitle"
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea 
                  className="postTextarea"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                ></textarea>
                <div className="btnDiv">
                <button 
                  className="primaryPostBtn"
                  onClick={() => handleSave(blog.id)}
                >
                  Spara
                </button>
                <button
                  className="secondaryPostBtn"
                  onClick={() => setEditingBlog(null)}
                >
                  Avbryt
                </button>
              </div>
              </div>
            ) : (
              <div>
                <h2>{blog.title}</h2>
                <p className="blogText">{blog.text}</p>
                <p><b>{blog.author}</b></p>

                <Comments id={blog.id} />

                {currentUser.email === blog.author ? (
                  <div className="btnDiv">
                    <button onClick={() => handleEdit(blog)} className="primaryPostBtn">Redigera inlägg</button>
                    <button onClick={() => handleDelete(blog.id)} className="secondaryPostBtn">
                      Radera inlägg
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReadMyPosts;