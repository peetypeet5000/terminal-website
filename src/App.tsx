import React, { useState, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Name from "./components/Name";
import "./components/Menu.css";
import './App.css'

export default function App() {
  const location = useLocation();
  const [scanlines, setScanlines] = useState(true);
  const [background, setBackground] = useState(true);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement|null>(null);

  return (
    <div className={scanlines ? "crt" : ""}>
      <video autoPlay muted loop ref={videoRef} style={{opacity: backgroundLoaded? "1" :"0"}} onCanPlay={() => setBackgroundLoaded(true)} playsInline id="background-vid">
        <source src="./compressed_bkg.mp4" type="video/mp4" />
      </video>
      <Name text={">Peter LaMontagne"} />
      <div className="window">
        <div className="window__bar">
          <div className="window__bar-circles">
            <div className="window__bar-circle"></div>
            <div className="window__bar-circle window__bar-circle__yellow" />
            <div className="window__bar-circle window__bar-circle__green" />
          </div>
          <div>peter@peter-raspi: ~ - ssh pi</div>
          <div className="window__bar-filler" />
        </div>
        <p className="window__text">Raspberry Pi 3 Model B Rev 2.1</p>
        <div className="terminal__outer">
          <div className="terminal">
            <pre className="terminal__title">/home{location.pathname}</pre>
            {location.pathname != "/" && location.pathname != "/contact" && (
              <Link className="menu__return-button__small" to="/">
                <span className="material-symbols-outlined">
                  arrow_back
                </span>
                Return
              </Link>
            )}
            <Outlet />
            {location.pathname != "/" && (
              <Link className="menu__button menu__return-button" to="/">
                <span className="material-symbols-outlined menu__return-button-icon">
                  arrow_back
                </span>
                Return to Menu{" "}
              </Link>
            )}
          </div>
        </div>

        <div className="terminal__outer terminal__outer__small">
          <div className="terminal">
            <pre className="terminal__title">Accessibility</pre>
            <div className="terminal__selector">
              <label htmlFor="scanlines">Enable Scanline Effect</label>
              <input id="scanlines" type="checkbox" checked={scanlines} onChange={e => setScanlines(e.target.checked)}></input>
            </div>
            <div className="terminal__selector">
              <label htmlFor="background">Enable Moving Background</label>
              <input id="background" type="checkbox" checked={background} onChange={() => {
                  if (background) {
                    videoRef.current?.pause();
                    setBackground(false);
                  } else {
                    videoRef.current?.play();
                    setBackground(true);
                  }
                }}></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
