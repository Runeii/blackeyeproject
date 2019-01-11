import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default class Promo extends Component {
  constructor (props) {
    super(props)
    const {url, image1, image2, pretitle, title, description} = props
    this.state = {url, image1, image2, pretitle, title, description}
  }
  render () {
    return (
      <section class='promo promo--style-a container'>
          <Link to={ this.state.url }>
              <div class='promo__content'>
                  <header ref='title'>
                    <p class='promo__pretitle'> { this.state.pretitle }</p>
                    <h2 class='promo__title'>{ this.state.title }</h2>
                  </header>
                  <ul class='list--style-a'>
                      <li>
                          { this.state.description }
                      </li>
                  </ul>
              </div>
              <div class='promo__media promo__media-a'>
                  <img class='promo__media__img' ref='imagea' src={ process.env.REACT_APP_ASSET_HOST + this.state.image1 } />
              </div>
              <div class='promo__media promo__media-b'>
                  <div class='promo__media__inner'>
                      <img class='promo__media__img' ref='imageb' src={ process.env.REACT_APP_ASSET_HOST + this.state.image2 } />
                  </div>
              </div>
          </Link>
      </section>
    )
  }
}
