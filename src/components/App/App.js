import React from 'react';

// import styles
import './App.css';
import 'normalize.css';

//import components
import Header from '../Header/Header.component.js'
import FamilyMember from '../FamilyMember/FamilyMember.component'

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

export default () => (
  <div>
    <Header />
    <FamilyMember 
      name={'Ben'}
      description={[
        'Paragraph 1',
        'Paragraph 2',
        'Paragraph 3'
      ]}
      stats={[
        {
          icon: runIcon,
          stat: '780',
          description: 'Miles ran'
        },
        {
          icon: computerIcon,
          stat: '100',
          description: 'Hours of coding tutorials'
        },
        {
          icon: movieIcon,
          stat: '50',
          description: 'Movies watched'
        }
      ]}
      images={[
        {
          src: benImage1,
          caption: 'Tour of the Southern Coast of Iceland with Sophie'
        },
        {
          src: benImage2,
          caption: 'Caption 2'
        },
        {
          src: benImage3,
          caption: 'Caption 3'
        },
        {
          src: benImage4,
          caption: 'Caption 4'
        },
        {
          src: benImage5,
          caption: 'Caption 5'
        },
        {
          src: benImage6,
          caption: 'Caption 6'
        }
      ]}  
    />
  </div>
)
