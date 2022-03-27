import { motion } from 'framer-motion'
import React, { useState } from 'react'

function BlogPosts() {

    const [blogs , setBlogs ] = useState([
        {title : "Css best practices part : 01" , imageLink : "https://oswosmedia.com/wp-content/uploads/2019/10/CSS-tricks.png" , published : '08 March 2022' , id:1},
        {title : "vscode extensions for web developers" , imageLink : "https://res.cloudinary.com/practicaldev/image/fetch/s--I429grbj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/pi1zbkpo2m0vnnlqwkht.png" , published : '07 March 2022' , id:2},
        {title : "vscode themes for night development" , imageLink : "https://res.cloudinary.com/practicaldev/image/fetch/s--NREemwl3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/378023/132220037-3cd3e777-55a6-445f-9a2e-da6020ebd78d.png" , published : '06 March 2022' , id:3}
    ])

  return (
    <motion.div className="blog-posts py-3" id="blog-posts"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition = {{delay : .2 , duration : .2}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Latest Blog Posts</h2>
                </div>

                {blogs.map((blog) => (
                    <div className="col-lg-4" key={blog.id}>
                    <a href="">
                    <div className="blog-post-card">
                        <div className="post-img" style={{ backgroundImage: `url(${blog.imageLink})` }}></div>
                        <h4>{blog.title}</h4>
                        <p>{blog.published}</p>
                    </div>
                    </a>
                </div>
                ) )}
                
                
                <div className="col-lg-12">
                    <div className="border-white my-2"></div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default BlogPosts