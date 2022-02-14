import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-default navbar-fixed-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img src="ReactTalaih/images/logo.png" width="35" height="35" alt="NavLogo"></img>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a className="nav-link" href="#aboutUs">من نحن</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" aria-current="page" href="#lejne">اللّجنة الإقليميّة</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" aria-current="page" href="#fourou3">الفروع</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#Nachatat">نشاطاتنا</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#Tanchi2a">تنشئة</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#Idariyet">إداريّات</a>
              </li>
              <li className="nav-item px-3">
                <Link className="nav-link" aria-current="page" to="reznema">روزنامة</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>);
};

export default Nav;