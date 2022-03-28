import { motion } from 'framer-motion'
import React from 'react'

function PortfolioProjects() {
  return (
    <motion.div className='projects pt-3 pb-5'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition = {{delay : .2 , duration : .2}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Portfolio Projects</h2>
          </div>
          <div className="col-lg-6">
            <div className="project-card my-3">
              <div className="portfolio-project-img-1 my-2">
                  <h4>CS50X Project</h4>
              </div>
              <h3>Pass Up</h3>
              <p>Password Generator Using Javascript Alogrithm</p>
              <div className="border-light"></div>
              <h6 className="my-1">Stack</h6>
              <div className="stack-icons">
                <img src="https://ik.imagekit.io/amac/Stack/icons8-html-64_5IjZ2OjpM.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-css-64_7tGrSxATO.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-javascript-64_-SMUYcUMdV.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-bootstrap-48_JsSI7trSdZ.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-django-50_jUd_I1GtJ.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-postgresql-96_moGsh78k0.png" alt="" />
              </div>
              <div className="links">
                <a href="http://passupgen.herokuapp.com/">Visit</a>
                <a href="https://github.com/ziadilotfi/PassUp-Generator">Code</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="project-card my-3">
              <div className="portfolio-project-img-2 my-2">
              <h4>React Project</h4>
              </div>
              <h3>Qr Code Generator</h3>
              <p>Qrcodegenerator website using ReactJs & Qrcode library</p>
              <div className="border-light"></div>
              <h6 className="my-1">Stack</h6>
              <div className="stack-icons">
                <img src="https://ik.imagekit.io/amac/Stack/icons8-html-64_5IjZ2OjpM.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-css-64_7tGrSxATO.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-javascript-64_-SMUYcUMdV.png" alt="" />
                <img src="https://ik.imagekit.io/amac/Stack/icons8-bootstrap-48_JsSI7trSdZ.png" alt="" />
                <img src="https://img.icons8.com/color/40/000000/react-native.png" alt="" />
                
              </div>
              <div className="links">
                <a href="https://www.l1gend.ml/qrcodegenerator/">Visit</a>
                <a href="https://github.com/ziadilotfi/qrcodegenerator">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioProjects