import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function BlogPosts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const response = await fetch(
      "https://mediumpostapi.herokuapp.com/?usermedium=l1g3nd"
    );
    const blogs = await response.json();
    setBlogs(blogs.dataMedium);
  }

  const numbers = [0, 1, 2];
  const blogPosts = numbers.map((number) => (
    // console.log(blogs[number].description)

    <div className="col-lg-4">
      <a href={blogs[number].link}>
        <div className="blog-post-card">
          <div
            className="post-img"
            style={{ backgroundImage: `url(${blogs[number].image})` }}
          ></div>
          <h4>{blogs[number].title}</h4>
          <p>{blogs[number].pubDate}</p>
        </div>
      </a>
    </div>
  ));

  return (
    <motion.div
      className="blog-posts py-3"
      id="blog-posts"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.2 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Latest Blog Posts</h2>
          </div>

          {blogPosts}

          <div className="col-lg-12">
            <div className="border-white my-2"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogPosts;
