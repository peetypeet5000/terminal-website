import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Name from './components/Name'

export default function App () {
  const location = useLocation();

  return (
    <>
      <video autoPlay muted loop playsInline id="background-vid">
        <source src="./compressed_bkg.mp4" type="video/mp4" />
      </video>
      <Name text={'>Peter LaMontagne'} />
      <div className='window'>
        <div className='window__bar'>
          <div className='window__bar-circles'>
            <div className='window__bar-circle'></div>
            <div className='window__bar-circle window__bar-circle__yellow' />
            <div className='window__bar-circle window__bar-circle__green' />
          </div>
          <div>
            /setup - root@localhost - user-config
          </div>
          <div className='window__bar-filler' />
        </div>
        <p className='window__text'>Raspberry Pi 3 Model B Rev 2.1</p>
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
    </>
  )
}
