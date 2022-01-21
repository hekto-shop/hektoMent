import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

import * as icons from '../../assets/icons';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['top-container']}>
        <div className={classes['contact-info']}>
          <address>
            <img src={icons.email} alt="email" />
            <h4>user@mail.com</h4>
          </address>
          <address>
            <img src={icons.phone} alt="email" />
            <h4>+1 (234) 5678</h4>
          </address>
        </div>

        <div className={classes.controls}>
          <div>ENG</div>
          <div>
            {/* <h4>USD</h4>
            <img src={icons.dropdown} alt="dropdown" /> */}
            <select>
              <option value="USD">USD</option>
              <option value="GEL">GEL</option>
            </select>
          </div>
          <Link to="/login">
            <h4>Login</h4>
            <img src={icons.user} alt="User" />
          </Link>
          <Link to="/wishlist">
            <h4>Wishlist</h4>
            <img src={icons.heart} alt="heart" />
          </Link>
          <Link to="/cart">
            <img src={icons.cart} alt="cart" />
          </Link>
        </div>
      </div>

      <div className={classes['nav-container']}>
        <h1>Hekto</h1>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={classes.selected} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.selected} to="/pages">
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.selected} to="/products">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.selected} to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.selected} to="/shop">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.selected} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={classes.searchbar}>
          <input type="text" />
          <span>
            <img src={icons.magnifier} alt="search" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
