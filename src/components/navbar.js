import React from "react";
import {Outlet, Link, BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from '../images/homebuyer-logo.webp'
import Page1 from "./page1";
import Home from '../layout'

// const Page1 = React.lazy(() => import('./page1'));
// const Page2 = React.lazy(() => import('./page2'));
// const Page3 = React.lazy(() => import('./page3'));
// const Page4 = React.lazy(() => import('./page4'));
// const Home = React.lazy(()=>import('../layout'))


export default function Navbar() {
  return (
    <>
        <nav>
          <div className="logo">
             <img className='logoin 'src={logo} alt="logo" />
          </div>
          <div className="hc">
          <ul>
            <li>
              <button className="btn1">Get pre-approved</button>
            </li>
            <li>
              <Link className="links" to="/page3">Contact</Link>
            </li>
            <li>
              <Link className="links" to="/page2">About</Link>
            </li>
            <li>
              <Link className="links" to="/page1">Learn</Link>
            </li>
          </ul>
          </div>
        </nav>
      <Outlet/>
    </>
  );
}

