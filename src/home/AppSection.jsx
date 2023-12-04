import React from 'react'
import logo1 from '../assets/images/app/01.jpg'
import logo2 from '../assets/images/app/01.jpg'
import { Link } from 'react-router-dom'
const btnText = "Sign up for free"
const title = "Shop anytime, anywhere"
const description = "Take shop on your any device with our app & learn all time what you want. Just download & install & start to learn"
function AppSection() {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to={'/signup'} className="lab-btn md-4">{btnText}</Link>
                <h2 className='title'>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='section-wrapper'>
              <ul className='lab-ul'>
                <li><a href="#"><img src={logo1} alt="" /></a></li>
                <li><a href="#"><img src={logo2} alt="" /></a></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default AppSection