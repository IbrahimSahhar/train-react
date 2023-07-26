import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";

const Post = ({ id, title, body, userId, tags, reactions }) => {
  return (
    <div>
      <Container>
        <ol>
          <li>id : {id}</li>
          <li>title:{title} </li>
          <Link to={`/posts/${id}`}>Show More </Link>
          <br />
          <br />
        </ol>
      </Container>
    </div>
  );
};

export default Post;

// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import PostData from "../../mock/Posts";

// const Post = ({ idPost, title, body, userId, tags, reactions }) => {
//   const { id } = useParams();
//   const post = PostData.find((item) => {
//     return item.id === Number(id);
//   });

//   return (
//     <div>
//       <ol>
//         <li>id : {idPost || post.id}</li>
//         <li>title:{title || post.title} </li>
//         <li>body : {body || post.id}</li>
//         <li>userId :{userId || post.body} </li>
//         <li>tags :{tags?.join(" , ") || post.tags?.join(" , ")} </li>
//         <li>reactions : {reactions || post.reactions}</li>
//         <Link to="">Show More </Link>
//         <br />
//         <br />
//       </ol>
//     </div>
//   );
// };

// export default Post;
