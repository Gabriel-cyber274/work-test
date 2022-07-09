import React, {useState} from 'react'
import feature from '../styles/features.module.css';
import Animation from './Animation';
import Second from './Section_two';

function Fifth() {
    const [features, setfeature] = useState(true)

  return (
    <div className={feature.container}>
      <div className={feature.cont}>
        <h2>Our features</h2>
        <div className={feature.animate}>
            <Animation />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiumod tempor incideient ut labbore et olore magna 
        </p>   
        </div>
        <Second fit={features} />
    </div>
  )
}

export default Fifth;