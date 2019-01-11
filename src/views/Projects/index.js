import React, { Component } from 'react'
import NewPromo from 'components/NewPromo'
import { activeProjects } from 'models/projectData'
import './style.scss'

export default class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      offset: 0,
      scroll: 0,
      elWidth: this.currentPageWidth(),
      screenHeight: window.innerHeight
    }
    this.container = null
  }
  componentDidMount () {
    window.addEventListener('scroll', this._onScroll)
    window.addEventListener('resize', this._onResize)
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this._onScroll)
    window.removeEventListener('resize', this._onResize)
  }
  _onResize = (e) => {
    this.setState({elWidth: this.currentPageWidth()})
  }
  currentPageWidth () {
    return (window.innerWidth > 1590) ? 1590 : window.innerWidth - 40
  }
  _onScroll = (e) => {
    const rounded = Math.round(window.scrollY)
    if (rounded !== this.state.scroll) {
      this.setState({scroll: rounded})
      this.container.style.setProperty('--scroll', rounded + "px")
    }
  }
  storeMainOffset = (element) => {
    if (element) {
      this.container = element
      // Manually adding header here, likely a better way
      let offset = element.offsetTop + 101.75
      this.setState({offset: offset})
    }
  }
  render () {
    return (
      <main class='content'>
        <div class='section section--theme-a section--style-a container'>
          <div class='block block--size-c'>
            <p class='section__title'>Done Better.</p>
            <p>Better thinking and a better attitude leads to better ideas, better work and better results for you. Here you’ll find examples of how we do better.</p>
          </div>
        </div>
        <div class='projects section section--theme-a section--style-c section--no-padding' ref={this.storeMainOffset}>
          {
            activeProjects.map((project, i) => {
              return <NewPromo key={i} data={project} scroll={this.state.scroll} elWidth={this.state.elWidth} screenHeight={this.state.screenHeight} parentOffset={this.state.offset} />
            }) 
          }
        </div>
      </main>
    )
  }
}
