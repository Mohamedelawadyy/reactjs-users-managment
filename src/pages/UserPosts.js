import React, { useEffect, useState } from "react";
// import { getUserPosts } from "../services/API";
import { useParams } from "react-router-dom";

export default function UserPosts() {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();

  // const getUsersPosts = async () => {
  //   try {
  //     const data = await getUserPosts(userId);
  //     setPosts(data.posts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
    // getUserPosts(userId);
  }, [userId]);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div className="card mb-3 text-center" key={post.id}>
          <h5 className="mb-3 mt-4">{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
