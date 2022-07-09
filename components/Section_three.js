import thirdS from '../styles/hosting.module.css';
import Animation from './Animation';
import React from 'react';
import secondI from '../images/img2.PNG';
import Image from 'next/image';
import Content from './Content';

function Third() {
  return (
    <div className={thirdS.hosting}>
      <div className={thirdS.hostC}>
          <h2>Cloud Hosting Services</h2>
          <Animation />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiumod tempor incideient ut labbore et olore magna aliwua. Ouis
              ipsum suspensidssed ultives gravuda
          </p>        
          <Content />
        </div>
      <div className={thirdS.center}>
        <Image src={secondI} alt='img' />
      </div>
    </div>
  )
}

export default Third