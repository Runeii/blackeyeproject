import React, { Component } from 'react'
import BlurryImgSrcset from 'components/Img'
import './style.scss'

export default class Agency extends Component {
  render () {
    return (
      <main class='content'>
        <div class='section section--theme-a section--style-a container'>
          <div class='block block--size-c'>
            <p class='section__title'>We believe in better creative. We’re not about fancy buzzwords and complicating things to make us look clever. Because really, it’s simple. You need to do better.</p>
          </div>
          <div class='block block--size-c'>
            <div class='section__body'>
              <p>Better than the competition. Better than last time. Better than you thought possible. That’s where success lies.</p>
              <p>Yet simple doesn’t mean easy. That’s why we’ve put together an experienced team with the expertise and attitude to make sure we, and you, do better.</p>
            </div>
          </div>
        </div>
        <div class='container--full'>
          <BlurryImgSrcset
            imagePath='/images/agency/'
            sizes={[512, 1024, 2048, 3072, 4096]}
            src='TheTeam'
            extension='jpg' />
        </div>
        <div class='section section--theme-a section--style-e skills'>
          <div class='container'>
            <div class='block block--size-a'>
              <h3 class='section__title'>Ask us about</h3>
            </div>
            <div class='section__body block block--size-e skills__list'>
              <ul class='list--style-c'>
                <li>Traditional</li>
                <li>Non-traditional</li>
                <li>Design</li>
                <li>Digital</li>
                <li>Brand Identity</li>
                <li>Social</li>
                <li>Collateral</li>
                <li>Style Guides</li>
                <li>Photography</li>
              </ul>
            </div>
            <div class='section__body block block--size-e skills__list'>
              <ul class='list--style-c'>
                <li>Research</li>
                <li>Planning</li>
                <li>Project Management</li>
                <li>Brand Positioning</li>
                <li>Brand Management</li>
              </ul>
            </div>
          </div>
        </div>
        <div class='section section--theme-c section--style-d'>
          <div class='container'>
            <h3 class='section__title'>Clients who choose Do Better</h3>
            <div class='grid'>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/cycliq.svg'} alt='cycliq'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/knightfrank.svg'} alt='knight frank'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/richardsons.png'} alt='richardsons'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/poconido.svg'} alt='poco nido'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/northridge.png'} alt='north ridge'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/start_fitness.png'} alt='start fitness'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/westfield.svg'} alt='westfield health'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/mkblades_side.svg'} alt='mk blades'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/eticloud.svg'} alt='eticloud'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/gooutdoors.png'} alt='gooutdoors'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/lvf.svg'} alt='1rebel'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/dd.png'} alt='datacenter dynamics'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/maher.png'} alt='maher'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/shamal.svg'} alt="shamal"/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/riggotts.svg'} alt='riggotts'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/sheffbid.svg'} alt='sheffield BID'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/33.svg'} alt='33'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/trib3.svg'} alt='trib3' height="40px" />
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/qhi.svg'} alt='qhi'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/fragata.svg'} alt='fragata'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/quatro.png'} alt='quatro'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/finnegan.svg'} alt='finnegan'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/sa.svg'} alt='the salvation army'/>
              </div>
              <div class='grid__item'>
                <img src={process.env.REACT_APP_ASSET_HOST + '/images/clients/johnwilson.svg'} alt='john wilson'/>
              </div>
            </div>
          </div>
        </div>
        <div class='container--full'>
          <BlurryImgSrcset
            imagePath='/images/agency/'
            sizes={[512, 1024, 2048, 3072, 4096]}
            src='TheAgency'
            extension='jpg' />
        </div>
      </main>
    )
  }
}
