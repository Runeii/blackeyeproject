import React, { Component } from 'react'
import { Application, Container, filters, Graphics, Sprite, Texture } from 'pixi.js'
import './style.scss'


export default class NewPromo extends Component {
  constructor (props) {
    super(props)
    const {data, scroll, elWidth, screenHeight, parentOffset} = props
    const {url, client, promo_title, title, promo_image1} = data
    this.state = {
      url, client,
      title: promo_title,
      description: title
    }

    // Coordinates and sizes
    this.width = elWidth 
    this.screenHeight = screenHeight
    this.height = this.width / 2
    this.scroll = scroll

    // Viewport
    this.inViewport = true
    this.ownOffsetTop = 0
    this.parentOffsetTop = parentOffset
    this.positions = {}

    // DOM elements
    this.scrollContainer = null
    this.pixiContainer = null

    // Pixi
    this.app = new Application({
      width: this.width,
      height: this.screenHeight,
      transparent: true,
      autoDensity: true
    })
    this.app.renderer.autoResize = true
    this.app.renderer.forceFXAA = true
    this.rendering = true
    this.image = Texture.fromImage(process.env.REACT_APP_ASSET_HOST + promo_image1)
    this.leftMask = null
    this.leftBox = null
    this.rightBox = null
  }
  componentWillReceiveProps (newProps) {
    if (newProps.elWidth !== this.elWidth) {
      this.width = newProps.elWidth
      this.height = this.width / 2
      this.updateDimensions()
    }
    if (newProps.parentOffset !== this.positions.belowScreen) {
      this.parentOffsetTop = newProps.parentOffset
      this.updatePositions()
    }
    if (newProps.scroll !== this.scroll) {
      this.scroll = newProps.scroll
      this.handleScroll()
    }
  }
  componentDidMount () {
    this.updatePositions()
  }
  updateDimensions () {
    this.app.stage.removeChildren()
    this.setupElements()
  }
  updatePositions () {
    let inViewAt = this.parentOffsetTop + this.ownOffsetTop - this.screenHeight
    this.positions = {
      aboveScreen: inViewAt + this.screenHeight + this.height,
      centre: inViewAt + ((this.screenHeight + this.height) / 2),
      belowScreen: inViewAt
    }
    if (this.scrollContainer) {
      this.scrollContainer.style.setProperty('--ownOffset', this.positions.centre + "px")
    }
    this.handleScroll()
  }
  setupScrollContainer = (element) => {
    this.scrollContainer = element
    if (this.scrollContainer) {
      this.ownOffsetTop = element.offsetTop
      this.updatePositions()
    }
  }
  setupPixiContainer = (element) => {
    this.pixiContainer = element
    if (this.pixiContainer && this.pixiContainer.children.length <= 0) {
      this.pixiContainer.appendChild(this.app.view)
      this.setupElements()
    }
  }
  setupElements () {
    const rightMask = new Graphics()
    rightMask.beginFill(0xFF3300);
    rightMask.drawRect((this.width * 0.3), 0, this.width, (this.height * 0.75));
    rightMask.endFill()

    this.rightBox = Sprite.from(this.image)
    this.rightBox.mask = rightMask
    this.rightBox.zIndex = 1
    this.app.stage.addChild(this.rightBox)

    const coords = [0, (this.height * 0.35), (this.width*0.35), (this.height * 0.65)]

    const rightOverlay = new Graphics()
    rightOverlay.beginFill(0xf1214);
    rightOverlay.drawRect(coords[0], coords[1], coords[2], coords[3])
    rightOverlay.endFill()
    rightOverlay.zIndex = 2
    this.app.stage.addChild(rightOverlay)


    const leftShadow = new Graphics()
    leftShadow.beginFill(0xf1214);
    leftShadow.drawRect(coords[0], coords[1] - 15, coords[2] + 15, coords[3])
    leftShadow.endFill()
    leftShadow.zIndex = 3
    leftShadow.alpha = 0.5

    let blur = new filters.BlurFilter()
    blur.autoFit = true
    blur.resolution = 1
    leftShadow.filters = [blur]

    let leftMask = new Graphics()
    leftMask.beginFill(0xFF3300);
    leftMask.drawRect(coords[0], coords[1], coords[2], coords[3])
    leftMask.endFill()
    this.leftMask = leftMask

    let leftImage = Sprite.from(this.image)
    leftImage.zIndex = 4
    leftImage.mask = leftMask
    
    this.leftBox = new Container();
    this.leftBox.addChild(leftShadow);
    this.leftBox.addChild(leftImage);
    this.app.stage.addChild(this.leftBox)
    this.handleScroll()
  }
  handleScroll () {
    this.inViewport = (this.scroll > this.positions.belowScreen && this.scroll < this.positions.aboveScreen)
    if (!this.inViewport) {
      if (this.rendering) {
        this.app.stop()
        this.rendering = false
      }
      return false
    }
    if (this.inViewport && !this.rendering) {
      this.app.start()
      this.rendering = true
    }
    let offset = this.positions.centre - this.scroll
    this.leftMask.position.y = offset
    this.leftBox.position.y = offset
  }
  render () {
    return (
      <section class='promo promo--style-a container' ref={this.setupScrollContainer}>
        <div class='promo__content'>
            <header ref='title'>
              <p class='promo__pretitle'> { this.state.client }</p>
              <h2 class='promo__title'>{ this.state.title }</h2>
            </header>
            <ul class='list--style-a'>
                <li>
                    { this.state.description }
                </li>
            </ul>
        </div>
        <div ref={this.setupPixiContainer} />
      </section>
    )
  }
}