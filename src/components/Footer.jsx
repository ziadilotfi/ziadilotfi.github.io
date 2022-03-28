import React from 'react'

function Footer() {
  return (
    <footer className='py-3' id="#contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <h3>Wanna Work With Me ?</h3>
                </div>
                <div className="col-lg-12 text-center">
                    <a href="mailto:ziadilotfi2001@gmail.com" className="btn btn-light">Send me an email <img className="px-1" src="https://img.icons8.com/ios-filled/20/000000/marked-mail.png"/></a>
                </div>
                <div className="col-lg-12 text-center my-3">
                    <a href="https://twitter.com/geek_lotfi" className="px-1"><img src="https://img.icons8.com/doodle/35/000000/twitter--v1.png"/></a>
                    <a href="https://www.instagram.com/l1g3nd/" className="px-1"><img src="https://img.icons8.com/bubbles/35/000000/instagram-new--v2.png"/></a>
                    <a href="https://github.com/ziadilotfi" className="px-1"><img src="https://img.icons8.com/doodle/35/000000/github--v1.png"/></a>
                    <a href="https://dribbble.com/L1G3ND" className="px-1"><img src="https://img.icons8.com/cute-clipart/35/000000/dribbble.png"/></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer