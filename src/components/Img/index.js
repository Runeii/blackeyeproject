import React, {Component} from 'react'
import { SimpleImg } from 'react-simple-img';

export default class BlurryImgSrcset extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    const lastSize = props.sizes.length > 0 ? props.sizes.length - 1 : 0
    const imageLocation = process.env.REACT_APP_ASSET_HOST + props.imagePath
    this.state = {
      src: `${imageLocation}${props.src}_${props.sizes[lastSize]}px.${props.extension}`,
      srcset: props.sizes.map(size => `${imageLocation}${props.src}_${size}px.${props.extension} ${size}w`).join(', ')
    }
    console.log(this.state)
  }
  render () {
    return (
      <SimpleImg src={this.state.src} srcset={this.state.srcset} />
    )
  }
}