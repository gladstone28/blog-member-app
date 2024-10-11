import React, { useState } from 'react';

const Blog = () => {
  // Example blog posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'The Importance of Community in Faith',
      author: 'Pastor John Doe',
      date: 'October 10, 2024',
      content: `
        In today's world, where individualism is often emphasized, the idea of community can be overlooked. 
        However, in faith, community plays a vital role in personal and spiritual growth. Whether it's coming 
        together for worship, supporting each other in prayer, or simply offering a helping hand to those in need, 
        community strengthens our connection with God and each other.
        
        Jesus emphasized the importance of community in His teachings, saying, "For where two or three gather in my name, 
        there am I with them" (Matthew 18:20). This highlights the powerful presence of God when we come together, united in faith.
        
        As we navigate through life's challenges, it's crucial to lean on our faith community for guidance, encouragement, 
        and mutual support. In doing so, we reflect Christ's love and build a strong foundation of trust and belonging within the church.
      `,
    },
    {
      id: 2,
      title: 'How to Grow Spiritually Through Daily Prayer',
      author: 'Sister Jane Smith',
      date: 'October 5, 2024',
      content: `
        Prayer is one of the most powerful tools we have as Christians. It is our direct line to God and an essential part of our spiritual journey.
        But how often do we engage in meaningful prayer?

        Developing a habit of daily prayer helps to deepen our relationship with God, offering us peace, guidance, and strength in times of need.
        Whether we pray in the morning, at night, or during breaks in our day, setting aside dedicated time for God will significantly impact our
        spiritual growth.

        Remember that prayer is not just about asking for things but also about listening to God's voice, giving thanks, and reflecting on His blessings.
        Consistency is key. As 1 Thessalonians 5:17 tells us, "Pray without ceasing."
      `,
    },
  ]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Blog Articles</h2>
      {posts.map((post) => (
        <div key={post.id} style={styles.post}>
          <h3 style={styles.postTitle}>{post.title}</h3>
          <p style={styles.postMeta}>
            <strong>By:</strong> {post.author} | <strong>Date:</strong> {post.date}
          </p>
          <p style={styles.postContent}>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '40px',
  },
  post: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    transition: 'all 0.3s ease',
  },
  postTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  postMeta: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '15px',
  },
  postContent: {
    lineHeight: '1.6',
    color: '#444',
  },
};

export default Blog;
