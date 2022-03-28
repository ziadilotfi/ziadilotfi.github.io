import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectsCarousel from '../components/ProjectsCarousel'

function Projects() {



  return (
    <motion.div className='projects pt-4 pb-2' id="projects"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition = {{delay : .2 , duration : .2}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <motion.h2
            initial = {{opacity : 0}}
            animate = {{opacity : 1}}
            transition={{delay : 2.5 , duration : .5}}
            >Projects</motion.h2>
          </div>
          <div className="col-lg-6">
            <div className="project-card my-3">
              <div className="project-img my-2">
                <ProjectsCarousel image='https://ik.imagekit.io/amac/Desktop_-_14__2__K3LHxGLN6.png' image2='https://ik.imagekit.io/amac/Thumbnail__2__q7AMzZnT4.png' id="camppercarousel"/>
              </div>
              <h3 className="txt-h3">Swap dz</h3>
              <p>Algerian , Online Classifieds Website </p>
              <div className="border-light"></div>
              <h6 className="my-1">Stack</h6>
              <div className="stack-icons">
                <img src="https://ik.imagekit.io/amac/Stack/icons8-html-64_5IjZ2OjpM.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-css-64_7tGrSxATO.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-javascript-64_-SMUYcUMdV.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-bootstrap-48_JsSI7trSdZ.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-django-50_jUd_I1GtJ.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-postgresql-96_moGsh78k0.png" alt="" />
                <img src="https://img.icons8.com/doodle/40/000000/figma.png" alt="" />
              </div>
              <div className="links">
                <a onClick={() => { alert('Website In Developement')}}>Visit</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="project-card my-3">
          <div className="project-img my-2">
          <ProjectsCarousel image='https://ik.imagekit.io/amac/Desktop_-_14_nuqHn76ck.png' image2='https://ik.imagekit.io/amac/Thumbnail__1__zhelFeCHQ.png' id="swapcarousel"/>
          </div>
              <h3 className="txt-h3">Campper App</h3>
              <p>Responsive App Landing Page Template</p>
              <div className="border-light"></div>
              <h6 className="my-1">Stack</h6>
              <div className="stack-icons">
                <img src="https://ik.imagekit.io/amac/Stack/icons8-html-64_5IjZ2OjpM.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-css-64_7tGrSxATO.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-javascript-64_-SMUYcUMdV.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-bootstrap-48_JsSI7trSdZ.png" alt="" />
                <img src="https://img.icons8.com/doodle/40/000000/figma.png" alt="" />
              </div>
              <div className="links">
                <a className='link' href="https://willowy-monstera-440675.netlify.app">Visit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects