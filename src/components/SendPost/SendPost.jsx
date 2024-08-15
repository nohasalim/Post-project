import { useState } from "react";
import user3Img from "../../../public/Images/image-maxblagun.png";
import './SendPost.css'
function SendPost(props) {
    const [inputvalue,setinputvalue]=useState("")
    function handleSendPost(){
        props.AddNewpost(inputvalue);
        setinputvalue("")

    }
    function handleOnchange(event){
        setinputvalue(event.target.value);
        
    }
  return (
    <div id='newpost'>
      <img src={user3Img}></img>
      <input placeholder="Send New Post"value={inputvalue} onChange={handleOnchange} ></input>
      <button onClick={handleSendPost}>Send</button>
    </div>
  );
}
export default SendPost;
