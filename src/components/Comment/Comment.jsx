import { useState } from "react";
import "./Comment.css"

function Comment({ comment, postid, DeleteReply , updateReply}) {
  const [showEditSection, setShowEditSection] = useState(false);
  const [inputValue, setInputValue] = useState(comment.comment);

  const [postId] = useState(postid);
  const [commentId] = useState(comment.commentid);

  function handleDeleteReply() {
    DeleteReply(postId, commentId);
  }

  function handleEditReply() {
    const neweditSectionValue = !showEditSection;
    setShowEditSection(neweditSectionValue);
  }

  function handleOnChange(event) {
    setInputValue(event.target.value);
  }
  function hanleUpdateReply(){
    setShowEditSection("false")
    updateReply(inputValue,postId,commentId)
  }

  return (
    <div className="Comment">
      {showEditSection == true ? (
        <>
          <input value={inputValue} onChange={handleOnChange}></input>
          <button onClick={hanleUpdateReply}>Update</button>
        </>
      ) : (
        <p>{comment.comment}</p>
      )}

      <button onClick={handleDeleteReply}>Delete comment</button>

      <button onClick={handleEditReply}>Edit</button>
    </div>
  );
}

export default Comment;
