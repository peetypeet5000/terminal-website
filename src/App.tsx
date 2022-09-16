import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Name from './components/Name'

export default function App () {
  return (
    <div>
      <video autoPlay muted loop playsInline id="background-vid">
        <source src="./compressed_bkg.mp4" type="video/mp4" />
      </video>
      <div className="header">
        <span>
          <Name text={'>Peter LaMontagne'} />
        </span>
      </div>
      <div className="outer-menu-box">
        <div className="menu-box">
          <pre className="box-title">Ball</pre>
          <Outlet />
          <Link to='/'>Return to Menu </Link>
        </div>
      </div>
    </div>
  )
}
