import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Name from './components/Name'

export default function App () {
  const location = useLocation();

  return (
    <div>
      <video autoPlay muted loop playsInline id="background-vid">
        <source src="./compressed_bkg.mp4" type="video/mp4" />
      </video>
      <Name text={'>Peter LaMontagne'} />
      <div className="terminal__outer">
        <div className="terminal">
          <pre className="terminal__title">{location.pathname}</pre>
          <Outlet />
          {location.pathname != '/' && 
            <Link className='menu__button menu__button__return' to='/'>Return to Menu </Link>
          }
        </div>
      </div>
    </div>
  )
}
