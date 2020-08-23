import React from "react";
import REACTDOM from "react-dom"
import { ReactComponent } from "*.svg";

// converted to class-based component
class CommentDetail extends ReactComponent{
  constructor(props){
    super(props)
  };
   render(){
     return( <div className="comment">
     <a href="/" className="avatar">
       <img alt="avatar" src={props.img} />
     </a>
     <div className="content">
       <a href="/" className="author">
         {props.author}
       </a>
       <div className="metadata">
         <span className="date">{props.timeAgo}</span>
       </div>
       <div className="text">{props.commentText}</div>
     </div>
   </div>
   );
   }
}



export default CommentDetail;
