import React, { Component } from 'react'
import './style.scss'

export default class Home extends Component {
  render () {
    return (
      <main class='content'>
        <div class='section section--theme-a section--style-a container doBetter'>
          <div class='block--size-a'>
            <img class='doBetter__title' src={process.env.REACT_APP_ASSET_HOST + '/images/do_better.svg' } title='Do Better.' alt='Do Better.' />
          </div>
          <div class='block--size-b section__title'>
            <p>You're good at what you do.</p>
            <p>But you can always do better.</p>
            <p>Let us show you how we make you better than good.</p>
            <p>Marketing, brand building, creative problem solving, whatever.</p>
            <p>We’ve always been good at it.</p>
            <p>And now we’re even better.</p>
            <p>That's good news for you.</p>
            <p>So when you want creative that works, across all traditional and digital marketing channels, choose an agency that will always do better.</p>
          </div>
        </div>
      </main>
    )
  }
}
