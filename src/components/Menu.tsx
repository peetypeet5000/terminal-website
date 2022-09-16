import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu () {
  return (
    <div className='menu'>
      <Link className='menu__button' to='/resume'>Resume  ---  View my resume</Link>
      <Link className='menu__button' to='/projects'>Projects ---  See the various personal and class projects I have worked on</Link>
      <Link className='menu__button' to='/about'>About  ---  Read more about me</Link>
      <Link className='menu__button' to='/contact'>Contact  ---  Connect with me</Link>
    </div>
  );
}
