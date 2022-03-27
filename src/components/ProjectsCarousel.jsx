import React from 'react'

function ProjectsCarousel(props) {

  const id = `#${props.id}`

  return (
    <div id={props.id} class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={props.image} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={props.image2} alt="First slide" />
            </div>
            </div>
            <a class="carousel-control-prev" href={id} role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href={id} role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
  )
}

export default ProjectsCarousel