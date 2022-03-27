import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Skills() {
    const listVariants = {

        whileHover : {scale : 1.1 ,originX : 0,  color: "#fff"}

    }

    const [frontend , setFrontend] = useState([
         {title : 'Html 5' , logo : 'https://img.icons8.com/color/48/000000/html-5--v1.png' , id:1},
         {title : 'Css 3' , logo : 'https://img.icons8.com/external-flaticons-flat-flat-icons/40/000000/external-css-computer-programming-flaticons-flat-flat-icons.png' , id :2},
         {title : 'JavaScript' , logo : 'https://img.icons8.com/color/40/000000/javascript--v1.png' , id :3},
         {title : 'ReactJs' , logo : 'https://img.icons8.com/color/40/000000/react-native.png' , id :4},
    ])
    const [backend , setBackEnd] = useState([
        {title : 'Python' , logo : 'https://img.icons8.com/stickers/40/000000/python.png' , id :5},
        {title : 'Django' , logo : 'https://img.icons8.com/ios/40/ffffff/django.png' , id :6},
        {title : 'mySql' , logo : 'https://img.icons8.com/color/40/000000/mysql-logo.png' , id :7},
   ])
   const [design , setDesign] = useState([
    {title : 'Figma' , logo : 'https://img.icons8.com/doodle/40/000000/figma.png' , id :8},
    {title : 'Photoshop' , logo : 'https://img.icons8.com/fluency/40/000000/adobe-photoshop.png' , id :9},
    {title : 'Premiere Pro' , logo : 'https://img.icons8.com/color/40/000000/adobe-premiere-pro--v1.png' , id :10},
    ])
    const [skills , setSkills] = useState([
    {title : 'Linux / Unix' , logo : 'https://img.icons8.com/color/40/000000/linux--v1.png' , id :11},
    {title : 'Git' , logo : 'https://img.icons8.com/color/40/000000/git.png' , id :12},
    {title : 'Cisco (R&S)' , logo : 'https://img.icons8.com/stickers/40/000000/network.png' , id :13},
    ])
    

  return (

    <motion.div id="skills" 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition = {{delay : .2 , duration : .2}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Skills</h2>
                </div>
            
            <div className="col-lg-3">
                <h4>Front-End</h4>
                <ul>
                    {frontend.map((lang) => (
                        <motion.li key={lang.id} variants = {listVariants} whileHover = 'whileHover'><img className="px-1" src={lang.logo}/>{lang.title}</motion.li>
                        ))}
                    
                </ul>
            </div>
            <div className="col-lg-3">
            <h4>Back-End</h4>
                <ul>
                {backend.map((lang) => (
                        <motion.li key={lang.id} variants = {listVariants} whileHover = 'whileHover'><img className="px-1" src={lang.logo}/>{lang.title}</motion.li>
                        ))}
                </ul>
            </div>
            <div className="col-lg-3">
            <h4>Design & Editing</h4>
                <ul>
                {design.map((lang) => (
                        <motion.li key={lang.id} variants = {listVariants} whileHover = 'whileHover'><img className="px-1" src={lang.logo}/>{lang.title}</motion.li>
                        ))}
                </ul>
            </div>
            <div className="col-lg-3">
            <h4>Additional Skills</h4>
            <ul>
            {skills.map((lang) => (
                        <motion.li key={lang.id} variants = {listVariants} whileHover = 'whileHover'><img className="px-1" src={lang.logo}/>{lang.title}</motion.li>
                        ))}
            </ul>
            </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Skills