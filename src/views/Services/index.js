import React, { Component } from 'react'
import './style.scss'

export default class Services extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slides: [{
        src: 'DoBetterBrand',
        sizes: false,
        extension: 'svg'
      }, {
        src: 'DoBetterGeometric',
        sizes: false,
        extension: 'svg'
      }, {
        src: 'DoBetterCopier',
        sizes: [512, 1024, 2048, 3072, 4096],
        extension: 'jpg'
      }, {
        src: 'DoBetterHat',
        sizes: [512, 1024, 2048, 3072, 4096],
        extension: 'jpg'
      }]
    }
  }
  render () {
    return (
      <main class='content services'>
        <div class='container sliderContainer'>
          <div slides={this.state.slides} class='container services__slider'/>
        </div>
        <div class='section section--theme-a section--style-a container'>
          <div class='section__body block--size-f'>
            <p>It starts with strategy. Research, planning, project management, brand positioning and brand management are all in the mix.</p>
            <p>Then on to creative. Where award-winning creatives and designers, thinkers and doers apply their knowledge and skills to advertising (traditional and non-traditional), design, digital, social media, brand identity, style guides, brand collateral, photography and more.</p>
            <p>We don’t believe in a one-size fits all approach.</p>
            <p>We do whatever it takes, to Do Better.</p>
          </div>
          <div class='block--size-b block--push-1 block--last'>
            <p class='services__wedo'>We do creative.</p>
            <p class='services__wedo'>We do branding.</p>
            <p class='services__wedo'>We do design.</p>
            <p class='services__wedo'>We do advertising.</p>
            <p class='services__wedo'>We do digital.</p>
            <p class='services__wedo'>We do websites.</p>
            <p class='services__wedo'>And we always</p>
            <p class='services__wedo'>Do Better.</p>
          </div>
        </div>
      </main>
    )
  }
}
