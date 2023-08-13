import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu () {
  return (
    <div className='menu'>
      <Link className='menu__button' to='/resume'>
        <span className='menu__header'>Resume</span>
        <span className='menu__subheader'>View my resume</span>
      </Link>
      <Link className='menu__button' to='/projects'>
        <span className='menu__header'>Projects</span>
        <span className='menu__subheader'>See various projects I have worked on</span>
      </Link>
      <Link className='menu__button' to='/about'>
        <span className='menu__header'>About</span>
        <span className='menu__subheader'>Read more about me</span>
      </Link>
      <Link className='menu__button' to='/contact'>
        <span className='menu__header'>Contact</span>
        <span className='menu__subheader'>Connect with me</span></Link>
    </div>
  );
}
