import React, { useContext } from "react";
import { CommentContext } from "../context/CommentContext";
import useInput from "../hooks/useInput";
import { AuthContext } from "../context/AuthContext";

const Comments = (props) => {
  const { comments, setComments } = useContext(CommentContext);
  const { currentUser } = useContext(AuthContext);
  const textInput = useInput();
  const filteredComments = comments.filter((comment) => {
    return comment.postId === props.id;
  });

  const addCommentBtn = (e) => {
    e.preventDefault();

    const maxId =
      comments.length > 0
        ? Math.max(...comments.map((comment) => comment.id))
        : 0;

    setComments([
      ...comments,
      {
        id: maxId + 1,
        postId: props.id,
        text: textInput.value,
        author: currentUser.email,
      },
    ]);
    textInput.reset();
  };

  return (
    <div className="column">
      <h4>Kommentarer</h4>
      <textarea
        className="commentInput"
        type="text-area"
        placeholder="Skriv din kommentar här"
        {...textInput}
      />
      <button onClick={addCommentBtn} className="primaryPostBtn">Lägg till kommentar</button>
                        {filteredComments.map((comment) => (
        <p key={comment.id}>
          "{comment.text}", {comment.author}
        </p>
      ))}
    </div>
  );
};

export default Comments;