import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { PostsData } from "../../Data/PostsData";
const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => (
        <Post data={post} key={id} />
      ))}
    </div>
  );
};

export default Posts;
