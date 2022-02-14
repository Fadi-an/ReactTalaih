import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-default navbar-fixed-top">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link class="navbar-brand" to="/">
            <img src="../images/logo.png" width="35" height="35" alt="NavLogo"></img>
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item px-3">
                <a class="nav-link" href="#aboutUs">من نحن</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" aria-current="page" href="#lejne">اللّجنة الإقليميّة</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" aria-current="page" href="#fourou3">الفروع</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="#Nachatat">نشاطاتنا</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="#Tanchi2a">تنشئة</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link" href="#Idariyet">إداريّات</a>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link" aria-current="page" to="reznema">روزنامة</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>);
};

export default Nav;