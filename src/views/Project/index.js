import React, { Component } from 'react'
import BlurryImg from 'components/Img'
import BlurryImgSrcset from 'components/Img'
import MediaPanel from 'components/MediaPanel'
import { findProject } from 'models/projectData'

export default class Project extends Component {
  constructor (props) {
    super(props)
    const project = findProject(props.match.params.slug)
    this.state = {
      ...project,
      ogImage: this.ogImage(project)
    }
  }
  ogImage (project) {
    if (typeof project.img_main === 'object') {
      let image = project.img_main
      return `${image.src}_${image.sizes[image.sizes.length - 1]}px.${image.extension}`
    }
    if (project.img_main) return project.img_main
    if (project.media.img_1) return project.media.img_1
    if (project.media.img_2) return project.media.img_2
  }
  copy () {
    return {
      brief: this.state.brief ? this.state.brief.map((p, i) => <p key={i}>{ p }</p>) : false,
      solution: this.state.solution ? this.state.solution.map((p, i) => <p key={i}>{ p }</p>) : false,
      done_better: this.state.done_better ? this.state.done_better.map((p, i) => <li key={i}>{ p }</li>) : false,
      skillsets: this.state.skillsets ? this.state.skillsets.map((p, i) => <li key={i}>{ p }</li>) : false
    }
  }
  projectImagePath (img) {
    return this.state.img_dir + img
  }
  render () {
    return (
      <main class='content'>
        <div class='section section--theme-b section--style-b container'>
          <div class='block block--size-d block--last'>
            <p class='section__pretitle'>{this.state.pretitle ? this.state.pretitle : this.state.client}</p>
            {<h2 class='section__title'>{this.state.subtitle ? this.state.title + `<br/>` + this.state.subtitle : this.state.title}</h2>}
          </div>
        </div>
        <div class='container--full'>
          { typeof this.state.img_main === 'object'
            ? <BlurryImgSrcset class='in-view-container' imagePath={this.state.img_dir} sizes={this.state.img_main.sizes} src={this.state.img_main.src} extension={this.state.img_main.extension} />
            : <BlurryImg class='in-view-container' smallSrc={this.projectImagePath('_' + this.state.img_main)} src={this.projectImagePath(this.state.img_main)} />
          }
        </div>
        <section class='section section--theme-a section--style-d container'>
          <div class='block block--size-a'>
            <h3 class='section__title'>The Challenge</h3>
          </div>
          <div class='section__body block block--size-b'>
            { this.copy().brief }
          </div>

          <div class='block block--clear'></div>

          <div class='block block--size-a'>
            <h3 class='section__title'>Solution</h3>
          </div>
          <div class='section__body block block--size-b'>
            { this.copy().solution }
          </div>

          <div class='block block--clear'></div>

          <div class='block block--size-a'>
            <h3 class='section__title'>Done Better</h3>
          </div>
          <div class='section__body block block--size-b'>
            <ul class='list--style-b'>
              { this.copy().done_better }
            </ul>
          </div>

          <div class='block block--clear'></div>

          <div class='block block--size-a'>
            <h3 class='section__title'>Do Better Skill Sets</h3>
          </div>
          <div class='section__body block block--size-b'>
            <ul class='list--style-b'>
              { this.copy().skillsets }
            </ul>
          </div>
        </section>

        <MediaPanel project={this.state} projectImagePath={this.projectImagePath} />

      </main>
    )
  }
}
