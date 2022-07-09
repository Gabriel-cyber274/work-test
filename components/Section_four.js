import React from 'react';
import design from '../styles/design.module.css';
import Image from 'next/image'
import Animation from './Animation';
import designI from '../images/img3.PNG';
import Content from './Content';

function Fourth() {
  return (
    <div className={design.container}>
        <div className={design.imageC}>
            <Image src={designI} alt='img' />
        </div>
        <div className={design.content}>
            <h2>Design & Development</h2>
            <Animation />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiumod tempor incideient ut labbore et olore magna aliwua. Ouis
                ipsum 
            </p>   
            <Content />
        </div>     
        
    </div>
  )
}

export default Fourth