import "./CommentsWrapper.css";
import Comment from "../Comment/Comment";
function CommentsWrapper(props) {
  return (
    <div className="CommentsWrapper">
      {props.comments.map((comment) => {
        return (
          <>
            <div>
              <Comment
                
                key={comment.commentid}
                postid={props.postid}
                DeleteReply={props.DeleteReply}
                comment={comment}
                updateReply={props.updateReply}

              ></Comment>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default CommentsWrapper;
