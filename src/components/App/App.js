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
        'Ben did a little traveling this year. In April, he met his girlfriend, Sophie, in Iceland for a week of tours around the island. Sophie was studying abroad in England for the majoriy of the year, so Iceland was a perfect in-between meeting place.',
        'During the summer months, Ben was training daily to run a half-marathon with Jake. They met to run their race in Punxsutawney in October. The final time was 1:47:26.',
        'During his annual vaction to OCMD with his buddies from high-school, Ben discovered the yard game, Spike Ball. He spent every Monnday evening afterwards in the park, pllaying until the sun went down. He would love to play with you if you are ever interested.'
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
