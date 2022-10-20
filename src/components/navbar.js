import React from "react";
import {Outlet, Link} from 'react-router-dom';
const Page1 = React.lazy(() => import('./page1'));
const Page2 = React.lazy(() => import('./page2'));
const Page3 = React.lazy(() => import('./page3'));
const Page4 = React.lazy(() => import('./page4'));
const Home = React.lazy(()=>import('../layout'))


export default function Navbar() {
  return (
    <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">About</Link>
            </li>
            <li>
              <Link to="/page2">Users</Link>
            </li>
            <li>
              <Link to="/page3">Users</Link>
            </li>
            <li>
              <Link to="/page4">Users</Link>
            </li>
          </ul>
        </nav>
      <Outlet/>
    </>
  );
}

