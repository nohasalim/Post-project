import "./App.css";
import Post from "./components/Post/Post";
import user1Img from "../public/Images/image-amyrobson.png";
import user2Img from "../public/Images/image-juliusomo.png"
import user3Img from "../public/Images/image-maxblagun.png";
import SendPost from "./components/SendPost/SendPost";
import { useState} from "react";
//import { useEffect } from "react";
function App() {
 /* const [ArrayofObjects, setArrayofobjects] = useState([]);
  useEffect(() => {
    function CallApi() {
      fetch("http://localhost:3000/posts")
        .then((response) => {
          return response.json();
        })
        .then((finalresult) => {
          setArrayofobjects(finalresult);
        });
    }
    CallApi();
  },[]);*/
  const [ArrayofObjects, setArrayofobjects] = useState([{
    id: 1,
    likes: 0,
    comments:[],
    userimg:user1Img,

    username: "noha salim",
    userpost:
      "post11111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae minus a aliquid et ipsa mollitia maiores, dignissimos minima consectetur labore eaque asperiores vitae. Ad dolorum similique asperiores praesentium iure!"
  },
  {
    id: 2,
    likes: 0,
    comments:[],
    userimg:user2Img,

    username: "ahmed salim",
    userpost:
      "post22222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae minus a aliquid et ipsa mollitia maiores, dignissimos minima consectetur labore eaque asperiores vitae. Ad dolorum similique asperiores praesentium iure!"
  },
  {
    id: 3,
    likes: 0,
    comments:[],
    userimg:user3Img,

    username: "ammar salim",
    userpost:
      "post33333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae minus a aliquid et ipsa mollitia maiores, dignissimos minima consectetur labore eaque asperiores vitae. Ad dolorum similique asperiores praesentium iure!"
  }]);


  function AddNewPostInsideArrayofobject(postcontent) {
    let newPostObject = {
      id: ArrayofObjects.length + 1,
      likes: 0,
      comments:[],
      userimg: user3Img,
      username: "ammar salim",
      userpost: postcontent,
    };
    let NewArrayofObjects = [...ArrayofObjects, newPostObject];
    setArrayofobjects(NewArrayofObjects);
  }
  function DeleteItem(postid) {
    const ArrayofObjectsAfterDelete = ArrayofObjects.filter((post) => {
      return post.id != postid;
    });
    setArrayofobjects(ArrayofObjectsAfterDelete);
  }
  //function to add new comment
  
  function AddReply(newcomment,id) {
    let myPost = ArrayofObjects.filter((post) => post.id == id)[0];
    let numOfComments = myPost.comments.length;
    let newCommentObject = {
      comment: newcomment,
      commentid:numOfComments + 1,
    };
    let NewArrayofObjects = ArrayofObjects.map((currentPost) => {
      if (currentPost.id == id) {
        currentPost.comments.push(newCommentObject);
      }
      return currentPost;
    });
    setArrayofobjects(NewArrayofObjects);
  }
//Function responsible for deleting comments
function DeleteReply(postid, commentid) {
  let NewArrayofObjects =ArrayofObjects.map((post) => {
    if (post.id == postid) {
      let newCommentObject = post.comments.filter((comment) => {
        return comment.commentid != commentid;
      });

      return { ...post, comments: newCommentObject };
    }

    return post;
  });

  setArrayofobjects(NewArrayofObjects);
}


//Function responsible for updating Reply
function updateReply(edittingcomment,postid,commentid){
  let NewArrayofObjects = ArrayofObjects.map((post) => {
    if (post.id == postid) {
      let newCommentObject = post.comments.map((comment) => {
        if (comment.commentid == commentid) {
          return { ...comment, comment: edittingcomment };
        }
        return comment;
      });

      post = { ...post, comments: newCommentObject };
    }

    return post;
  });

  setArrayofobjects(NewArrayofObjects);
}

  return (
    <>
      <div id="postsWrapper">
        {ArrayofObjects.map((post) => {
          return (
            <Post
              UniqueID={post.id}
              key={post.id}
              likes={post.likes}
              comments={post.comments}
              userimg={post.userimg}
              username={post.username}
              userpost={post.userpost}
              deleteitem={DeleteItem}
              AddReply={AddReply}
              DeleteReply={DeleteReply}
              updateReply={updateReply}
            ></Post>
          );
        })}
      </div>
      <SendPost AddNewpost={AddNewPostInsideArrayofobject}></SendPost>
    </>
  );
}

export default App;
