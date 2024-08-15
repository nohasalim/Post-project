import "./Post.css";
import plusImg from "../../assets/Images/icon-plus.svg";
import minusImg from "../../assets/Images/icon-minus.svg";
import replyImg from "../../assets/Images/icon-reply.svg";
import { useState } from "react";
import AddNewComment from "../AddNewComment/AddNewComment";
import CommentsWrapper from "../CommentsWrapper/CommentsWrapper";
function Post(props) {
  //toggling
  const [showReplyDiv, setshhowReplyDiv] = useState(false);
  const [count, setcount] = useState(props.likes);
  function plus() {
    const newvalue = count + 1;
    setcount(newvalue);
  }
  function minus() {
    const newvalue = count - 1;
    setcount(newvalue);
  }
  function handleDeletePost(event) {
    props.deleteitem(event.target.getAttribute("uniqueid"));
    console.log(event.target.getAttribute("uniqueid"));
  }
  function handleReplyPost() {
    let Finalstate = !showReplyDiv;
    setshhowReplyDiv(Finalstate);
  }
  function hideReplySection(){
    setshhowReplyDiv("false")
  }
  return (
    <div className="WrapperDiv">
      <div className="post">
        <div id="counterDiv">
          <button onClick={plus}>
            <img src={plusImg}></img>
          </button>
          <span>{count}</span>
          <button onClick={minus}>
            <img src={minusImg}></img>
          </button>
        </div>
        <div id="mainDiv">
          <div id="userDiv">
            <div id="div1">
              <img src={props.userimg}></img>
              <span>{props.username}</span>
            </div>

            <div id="div2">
              {props.username == "ammar salim" ? (
                <button uniqueid={props.UniqueID} onClick={handleDeletePost}>
                  Delete
                </button>
              ) : null}

              <img src={replyImg}></img>
              <button onClick={handleReplyPost}>Reply</button>
            </div>
          </div>

          <p>{props.userpost}</p>
        </div>
      </div>

      <CommentsWrapper
        key={props.key}
        comments={props.comments}
        postid={props.UniqueID}
        DeleteReply={props.DeleteReply}
        updateReply={props.updateReply}
      ></CommentsWrapper>
      {showReplyDiv == true ? (
        <AddNewComment AddReply={props.AddReply} UniqueId={props.UniqueID} hideReplySection={hideReplySection}></AddNewComment>
      ) : null}
    </div>
  );
}
export default Post;
