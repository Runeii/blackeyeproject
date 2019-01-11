import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default class Header extends Component {
  render () {
    return (
      <header class='header' id='header' role='banner' itemScope itemType='http://schema.org/WPHeader'>
        <div class='container'>

          <h1 class='header-logo' itemScope itemType='http://schema.org/WPHeader'>
            <Link to='/'>
              <span class='header-logo__text'>Black Eye Project</span>
              <img class='header-logo__img' src={process.env.REACT_APP_ASSET_HOST + '/images/logo.svg'} alt='bep' />
            </Link>
          </h1>

          <input type='checkbox' class='navigation-menu__toggle' id='show-menu' role='button'/>
          <label htmlFor='show-menu' class='navigation-menu__toggle__button'>
            <div class='navigation-menu__toggle__icon'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class='text'>Show Menu</span>
          </label>
          <nav class='navigation' id='site-navigation' role='navigation' itemScope itemType='http://schema.org/SiteNavigationElement'>
            <h1 class='navigation__title'>Navigation</h1>
            <a href='#main' class='visually-hidden'>Skip to content</a>
            <a href='#site-footer' class='visually-hidden'>Skip to footer</a>
            <ul class='navigation-menu navigation__level-0'>
              <li>
                <Link to='/projects'>Projects</Link></li>
              <li>
                <Link to='/agency'>Agency</Link></li>
              <li>
                <Link to='/services'>Services</Link></li>
              <li><a href='#site-footer' onClick={this.scrollBottom}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
