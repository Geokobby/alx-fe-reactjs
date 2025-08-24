// src/pages/Post.jsx
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams(); // extract dynamic route parameter

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Blog Post</h2>
      <p className="mt-4">You are viewing post with ID: <strong>{postId}</strong></p>
    </div>
  );
};

export default Post;
