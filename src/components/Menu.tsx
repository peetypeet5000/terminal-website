import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu () {
  return (
    <div>
      <Link to='/resume'>Resume  ---  View my resume</Link>
      <Link to='/projects'>Projects ---  See the various personal and class projects I have worked on</Link>
      <Link to='/about'>About  ---  Read more about me</Link>
      <Link to='/contact'>Contact  ---  Connect with me</Link>
    </div>
  );
}
