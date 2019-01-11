import React, { Component } from 'react'
import './style.scss'

export default class Footer extends Component {
  constructor (props) {
    super(props)
    this.year = new Date().getFullYear()
  }
  render () {
    return (
      <footer id='site-footer' class='footer'>
        <div class='container'>
          <section class='block block--size-a footer__section'>
            <h3 class='footer__title'>Contact us</h3>
            <p>
              <a href='tel:+441142132002'>+44 (0)114 213 2002</a>
            </p>
            <p>
              <a href='mailto:deaddrop@theblackeyeproject.co.uk'>deaddrop@theblackeyeproject.co.uk</a>
            </p>
          </section>
          <div class='block block--size-d block--last'>
            <section class=' footer__section'>
              <h3 class='footer__title'>Find us</h3>
              <p>
                The Paint Factory<br />
                163 Rutland Road<br />
                Sheffield<br />
                S3 9PT
              </p>
              <p>
                <a href='https://goo.gl/maps/bZM8PcQi6dP2' class='icon--location'>Google maps</a>
              </p>
            </section>
            <section class='footer__section footer__social'>
              <h3 class='footer__title'>Follow us</h3>
              <a href='https://twitter.com/blackeyeproject' class='icon--twitter' title='Twitter'></a>
              <a href='https://www.instagram.com/theblackeyeproject/' class='icon--instagram' title='Instagram'></a>
              <a href='https://www.linkedin.com/company/the-black-eye-project' class='icon--linkedin' title='LinkedIn'></a>
            </section>
            <div class='footer__copy'>
              <p><a href="/Terms & Conditions.pdf">Terms & Conditions</a> | Company No 07353109 | &copy; {this.year} Black Eye Project</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
