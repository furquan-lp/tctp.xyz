import React from 'react';
import { Link } from 'gatsby';

import './header.css';
import sitelogo from '../../assets/logo.svg';

const Header = () =>
  <div className="flex items-center justify-between shadow-panel pb-0.6">
    <Link to="/" id="logo-link">
      <img src={sitelogo} alt="The Chip Tinker Project" id="logo-filter" />
      <span id="logo-title">TCTP - The Chip Tinker Project</span>
    </Link>
    <div className="header-links">
      <Link to="/blog" className="header-link">Blog</Link>
      <Link to="/about" className="header-link">About</Link>
    </div>
  </div>;

export default Header;