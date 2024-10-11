import React, { useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Blog Post', content: 'This is the content of the first post' },
    { id: 2, title: 'Second Blog Post', content: 'This is the content of the second post' }
  ]);

  return (
    <div>
      <h2>Blog Articles</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
