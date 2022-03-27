import React from 'react'
import {motion} from 'framer-motion'

function Header() {
  return (
    <div className="header">
    <div className='container'>
        <div className='row align-items-center'>
            <div className='col-lg-6'>
                <motion.h1><motion.span 
                initial = {{opacity : 0}}
                animate = {{opacity : .8}}
                transition = {{delay : .6 , duration : .5}}
                >Hi,I'm</motion.span>
                <motion.strong initial = {{opacity : 0}} animate={{opacity : 1}} transition = {{delay : .8 , duration : .8}}> Lotfi</motion.strong><br/>
                <motion.strong initial = {{opacity : 0}} animate={{opacity : 1}} transition = {{delay : 1 , duration : 1}}>Full Stack Web Developer</motion.strong><br/>
                <motion.span initial = {{opacity : 0}} animate={{opacity : .8}} transition = {{delay : 1.2 , duration : 1.8}}>Ui Ux Designer</motion.span>
                </motion.h1>
            </div>
            <div className='col-lg-6'>
                <motion.div className='stack text-center' 
                initial = {{opacity : 0,x : '100vw'}}
                animate = {{opacity : 1 , x : 0}}
                transition = {{delay : 1.2 , duration : .4 , stiffness: 75 , type : 'spring'}}
                >
                  <motion.img src="https://ik.imagekit.io/amac/Portfolio/l1gend_logo_OKIN5yGxlJs.png" alt="" className="img-fluid header-stack" 
                   initial = {{opacity : 0,y : '-100vh'}}
                   animate = {{opacity : 1 , y: 0 , }}
                   transition = {{delay : 1.7 , duration : .8 , stiffness: 75 , type : 'spring'}}
                   whileHover={{scale:1.3 , transition: { duration: 1 }}}
                   />
                   
                </motion.div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header