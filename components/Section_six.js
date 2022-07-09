import React from 'react'
import team from '../styles/team.module.css'
import Animation from './Animation'
import SimpleSlider from './trash'

function Sixth() {
  return (
    <div className={team.container}>
      <div className={team.cont}>
          <h2>Our Awesome Team</h2>
          <div className={team.animate}>
              <Animation />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiumod tempor incideient ut labbore et olore magna aliwua. Ouis
              ipsum 
          </p>
        </div>
        <SimpleSlider />
    </div>
  )
}

export default Sixth