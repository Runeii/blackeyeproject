import React, { Component } from 'react'
import BlurryImg from 'components/Img'
import BlurryImgSrcset from 'components/Img'
import Video from 'components/Img'

export default class MediaPanel extends Component {
  constructor (props) {
    super(props)
    this.project = props.project
    this.projectImagePath = props.projectImagePath
  }
  render () {
    var buildMedia = []
    // console.log(this.  project)
    switch (this.project.layout) {
      case 'a':
        if (this.project.media.img_full_1) {
          buildMedia.push(<div class='container--full'>
            <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_full_1)} smallSrc={this.projectImagePath('_' + this.project.media.img_full_1)}/>
          </div>)
        }
        if (this.project.media.img_full_2) {
          buildMedia.push(<div class='container--full'>
            <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_full_2)} smallSrc={this.projectImagePath('_' + this.project.media.img_full_2)}/>
          </div>)
        }
        if (this.project.media.img_half_1 && this.project.media.img_half_2) {
          buildMedia.push(<div class='container--full-split'>
            <div class='container__half'>
              <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_half_1)} smallSrc={this.projectImagePath('_' + this.project.media.img_half_1)}/>
            </div>
            <div class='container__half'>
              <BlurryImg inViewportOffsetTop='-200' class='in-view-container' src={this.projectImagePath(this.project.media.img_half_2)} smallSrc={this.projectImagePath('_' + this.project.media.img_half_2)}/>
            </div>
          </div>)
        }
        if (this.project.media.img_full_4) {
          buildMedia.push(<div class='container--full'>
            <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_full_4)} smallSrc={this.projectImagePath('_' + this.project.media.img_full_4)}/>
          </div>)
        }
        if (this.project.media.img_half_3 && this.project.media.video) {
          buildMedia.push(<div class='container--full-split'>
            <div class='container__half'>
              <Video video={this.projectImagePath(this.project.media.video)} type='mp4' sizes={[720]} class='in-view-container' muted playsinline/>
            </div>
            <div class='container__half'>
              <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_half_3)} smallSrc={this.projectImagePath('_' + this.project.media.img_half_3)}/>
            </div>
          </div>)
        }
        if (this.project.media.img_half_3 && this.project.media.img_half_4) {
          buildMedia.push(<div class='container--full-split'>
            <div class='container__half'>
              <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_half_3)} smallSrc={this.projectImagePath('_' + this.project.media.img_half_3)}/>
            </div>
            <div class='container__half'>
              <BlurryImg inViewportOffsetTop='-200' class='in-view-container' src={this.projectImagePath(this.project.media.img_half_4)} smallSrc={this.projectImagePath('_' + this.project.media.img_half_4)}/>
            </div>
          </div>)
        }
        if (this.project.media.img_full_6) {
          buildMedia.push(<div class='container--full'>
            <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_full_6)} smallSrc={this.projectImagePath('_' + this.project.media.img_full_6)}/>
          </div>)
        }
        if (this.project.media.canvas && this.project.media.canvas === 'lavs') {
          buildMedia.push(<div>
            <script src={process.env.VUE_APP_ASSET_HOST + '/js/LAVS-canvas.js'}></script>
            <div id="animationContainer">
              <canvas id="canvas" width="1920" height="450"></canvas>
              <div id="domOverlayContainer"></div>
            </div>
            <div id='_preload_div_'></div>
          </div>)
        }
        if (this.project.media.img_full_7) {
          buildMedia.push(<div class='container--full'>
            <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_full_7)} smallSrc={this.projectImagePath('_' + this.project.media.img_full_7)}/>
          </div>)
        }
        if (this.project.media.img_full_8) {
          buildMedia.push(<div class='container--full'>
            <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media.img_full_8)} smallSrc={this.projectImagePath('_' + this.project.media.img_full_8)}/>
          </div>)
        }
        break
      case '2018':
        let multipleContainer = []
        this.project.media.forEach((media, i) => {
          const pushTarget = (media.half || media.third) ? multipleContainer : buildMedia
          pushTarget.push(
            <div class={`${media.half === true ? 'container--half' : 'container--full'} ${media.class ? media.class : ''}`} >
              {media.type === 'img' ? <BlurryImgSrcset key={i} inViewportOffsetTop={ multipleContainer.length === 1 ? '-200' : '-100' } class='in-view-container' imagePath={this.project.img_dir} sizes={media.sizes} src={media.src} extension={media.extension} /> : false}
              {media.type === 'video' ? <Video key={i} width={media.sizes[0] || '100%'} video={this.project.img_dir + media.src} fallback={typeof media.fallback === 'object' ? {...media.fallback, path: this.project.img_dir} : this.project.img_dir + media.fallback} type={media.extension} sizes={media.sizes} class='in-view-container' muted playsinline/> : false}
              {media.type === 'embed' ? <iframe key={i} src={media.src}></iframe> : false}
            </div>
          )
          if ((media.half && multipleContainer.length === 2) || (media.third && multipleContainer.length === 3)) {
            buildMedia.push(<div class='container--full-split'>{multipleContainer}</div>)
            multipleContainer = []
          }
        })
        break
      default:
        if (this.project.media) {
          for (const i in this.project.media) {
            buildMedia.push(<div class='container--full'>
              <BlurryImg class='in-view-container' src={this.projectImagePath(this.project.media[i])} smallSrc={this.projectImagePath('_' + this.project.media[i])}/>
            </div>)
          }
        }
        break
    }

    return (
      <div>
        {buildMedia}
      </div>
    )
  }
}
