import React from 'react'
import { motion } from 'framer-motion';

function Navbar() {

  const iconsVariant = {
    hidden : {
      opacity:0 , x: '100vw'
    },
    visible : {
      opacity:1 , x: 0
    }
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
    <a className="navbar-brand" href="/">
        <motion.img src="https://ik.imagekit.io/amac/Portfolio/l1gend_logo_OKIN5yGxlJs.png" alt="l1gend_logo" width="68px" height="75px" 
        initial={{opacity : 0 , x : '-100vw'}}
        animate={{opacity : 1 , x : 0 }}
        transition={{delay : .2 , duration : .6 }}
        />
        <motion.span 
        initial={{opacity : 0 , x : '100vh'}}
        animate={{opacity : 1 , x : 0}}
        transition={{delay : .2 , duration : .6}}
        >Ziadi Lotfi</motion.span>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <motion.span className="navbar-toggler-icon"
      initial={{opacity : 0 , x : '100vw'}}
      animate={{opacity : 1 , x : 0}}
      transition={{delay : .2 , duration : .2}}
      ></motion.span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item mx-3">
          <motion.a className='nav-link text-uppercase' href="#skills"
          variants = {iconsVariant}
          initial = 'hidden'
          animate = 'visible'
          transition={{delay : 0 , duration: .2}}
          >Skills</motion.a>
        </li>
        <li className="nav-item mx-3">
            <motion.a className='nav-link text-uppercase' href="#projects"
            variants = {iconsVariant}
            initial = 'hidden'
            animate = 'visible'
            transition={{delay : .2 , duration: .2}}
            >Projects</motion.a>
          </li>
          <li className="nav-item mx-3">
            <motion.a href="#blog-posts" className='nav-link text-uppercase'
            variants = {iconsVariant}
            initial = 'hidden'
            animate = 'visible'
            transition={{delay : .4 , duration: .4}}
            >Blog Posts</motion.a>
          </li>
          <li className="nav-item mx-3">
            <motion.a className='nav-link text-uppercase' href="#contact"
            variants = {iconsVariant}
            initial = 'hidden'
            animate = 'visible'
            transition={{delay : .8 , duration: .2}}
            >CONTACT ME</motion.a>
          </li>
      </ul>
      <ul className="navbar-nav ml-auto nav-social-icons">
          <li className="nav-item mx-1">
            <motion.a className="nav-link icons" href="https://github.com/ziadilotfi" 
            variants = {iconsVariant}
            initial = 'hidden'
            animate = 'visible'
            transition={{delay : 1 , duration: .2}}
            ><img src="https://img.icons8.com/color/35/000000/github--v1.png"/></motion.a>
            </li>
            <li className="nav-item mx-1">
            <motion.a className="nav-link icons" href="https://dribbble.com/L1G3ND" 
            variants = {iconsVariant}
            initial = 'hidden'
            animate = 'visible'
            transition={{delay : 1.2 , duration: .2}}><img src="https://img.icons8.com/stickers/35/000000/dribbble.png"/></motion.a>
            </li>
            <li className="nav-item mx-1">
            <motion.a className="nav-link icons" href="https://www.linkedin.com/in/lotfi-ziadi-316571168/"
            variants = {iconsVariant}
            initial = 'hidden'
            animate = 'visible'
            transition={{delay : 1.4 , duration: .2}}><img src="https://img.icons8.com/stickers/35/000000/linkedin.png"/></motion.a>
            </li>
            
      </ul>
    </div>
  </nav>
  )
}

export default Navbar