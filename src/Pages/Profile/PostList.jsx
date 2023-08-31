//Componente lista--------------------------
import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const addPost = (post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const updatePost = (index, updatedPost) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = updatedPost;
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const deleteAllPosts = () => {
    setPosts([]);
    localStorage.removeItem("posts");
  };

  const samplePosts = [
    {
      name: "Tayto",
      img: "https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg",
      description: "Cheese & Onion Chips",
    },
    {
      name: "Tayto2",
      img: "https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg",
      description: "Ejemplo2",
    },
  ];

  return (


    <div>

      <button onClick={deleteAllPosts}>Borrar todos los posts</button>

      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <div>{post.name}</div>
            <div>
              <img src={post.img} alt={post.name} />
            </div>
            <div>{post.description}</div>
            <button onClick={() => deletePost(index)}>Borrar</button>
          </li>
        ))}
      </ul>


      {samplePosts.map((post, index) => (
        <button 
        key={index} 
        onClick={() => addPost(post)}
        >
        Agregar {post.name}
        </button>
      ))}

    </div>
  );
};

export default PostList;
