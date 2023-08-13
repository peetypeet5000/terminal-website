import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Name from "./components/Name";
import "./components/Menu.css";

export default function App() {
  const location = useLocation();

  return (
    <div className="crt">
      <video autoPlay muted loop playsInline id="background-vid">
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
      </div>
    </div>
  );
}
