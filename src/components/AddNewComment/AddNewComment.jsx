import { useState } from "react";
import img1 from "../../../public/Images/image-maxblagun.png";
import "./AddNewComment.css";
function AddNewComment(props) {
  const [newcomment, setnewcomment] = useState("");
  function handleAddReply(event) {
    props.hideReplySection();
    const id=(event.target.getAttribute("uniqueid"));
    props.AddReply(newcomment,id);
    setnewcomment("");

  }
  function handleOnchange(event) {
    setnewcomment(event.target.value);
  }
  return (
    <div className="showReplyDiv">
      <img src={img1}></img>
      <input
        placeholder="Add A new Comment "
        value={newcomment}
        onChange={handleOnchange}
      ></input>
      <button uniqueid={props.UniqueId} onClick={handleAddReply}> Add Reply </button>
    </div>
  );
}
export default AddNewComment;
