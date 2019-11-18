import React from 'react';

// import styles
import './App.css';
import 'normalize.css';

//import components
import Header from '../Header/Header.component.js'
import FamilyMember from '../FamilyMember/FamilyMember.component'
import Gallery from '../Gallery/Gallery.component';

//import stat icons
import runIcon from '../../images/ben/directions_run-24px.svg'
import computerIcon from '../../images/ben/desktop_mac-24px.svg'
import movieIcon from '../../images/ben/movie_creation-24px.svg'

//import Ben images
import benImage1 from '../../images/ben/image-ben-1.jpg'
import benImage2 from '../../images/ben/image-ben-2.jpg'
import benImage3 from '../../images/ben/image-ben-3.jpg'
import benImage4 from '../../images/ben/image-ben-4.jpg'
import benImage5 from '../../images/ben/image-ben-5.jpg'
import benImage6 from '../../images/ben/image-ben-6.png'

//import Jake images
import jakeImage1 from '../../images/jake/image-jake-1.jpg'
import jakeImage2 from '../../images/jake/image-jake-2.jpg'
import jakeImage3 from '../../images/jake/image-jake-3.jpg'
import jakeImage4 from '../../images/jake/image-jake-4.jpg'
import jakeImage5 from '../../images/jake/image-jake-5.jpg'
import jakeImage6 from '../../images/jake/image-jake-6.jpg'

//import Pam & Andy images
import parentsImage1 from '../../images/pam-andy/image-ap-1.jpg'
import parentsImage2 from '../../images/pam-andy/image-ap-2.jpg'
import parentsImage3 from '../../images/pam-andy/image-ap-3.jpg'
import parentsImage4 from '../../images/pam-andy/image-ap-4.jpg'
import parentsImage5 from '../../images/pam-andy/image-ap-5.jpg'
import parentsImage6 from '../../images/pam-andy/image-ap-6.jpg'


export default () => (
  <div>
    <Header />
    <Gallery
      images={[
        {
          src: benImage1,
          caption: 'Tour of the Southern Coast of Iceland with Sophie'
        },
        {
          src: benImage2,
          caption: 'Sophie and Ben enjoying the volcanic waters of the Blue Lagoon'
        },
        {
          src: benImage3,
          caption: `Ben's new (used) Volkswagen Golf TDI`
        },
        {
          src: benImage4,
          caption: 'Ben and his friends enjoying the summer in Ocean City, MD'
        },
        {
          src: benImage5,
          caption: 'Ben and Jake ran their first half marathon in 1:47:26'
        },
        {
          src: benImage6,
          caption: 'Ben in State College playing Spike Ball with his friends'
        }
      ]}  
    />
  
    <Gallery
      images={[
        {
          src: jakeImage1,
          caption: 'Caption 1'
        },
        {
          src: jakeImage2,
          caption: 'Caption 2'
        },
        {
          src: jakeImage3,
          caption: `Caption 3`
        },
        {
          src: jakeImage4,
          caption: 'Caption 4'
        },
        {
          src: jakeImage5,
          caption: 'Caption 5'
        },
        {
          src: jakeImage6,
          caption: 'Caption 6'
        }
      ]}  
    />
    <Gallery
      images={[
        {
          src: parentsImage1,
          caption: 'Caption 1'
        },
        {
          src: parentsImage2,
          caption: 'Caption 2'
        },
        {
          src: parentsImage3,
          caption: `Caption 3`
        },
        {
          src: parentsImage4,
          caption: 'Caption 4'
        },
        {
          src: parentsImage5,
          caption: 'Caption 5'
        },
        {
          src: parentsImage6,
          caption: 'Caption 6'
        }
      ]}  
    />
    
  </div>
)
