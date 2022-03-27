import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Projects from '../components/Projects'
import PortfolioProjects from '../components/PortfolioProjects'
import Skills from '../components/Skills'
import BlogPosts from '../components/BlogPosts'
import Footer from '../components/Footer'

function Portfolio() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Projects/>
    <PortfolioProjects/>
    <Skills/>
    <BlogPosts/>
    <Footer/>
    </>
  )
}

export default Portfolio