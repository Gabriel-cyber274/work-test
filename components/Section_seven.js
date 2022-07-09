import React from 'react'
import Animation from './Animation'
import seven from '../styles/seven.module.css';

function Seven() {
  return (
    <div className={seven.container}>
        <h2>We always try to undersatnd users 
            expectation
        </h2>
        <div className={seven.AnimateC}>
            <Animation/>
        </div>
    </div>
  )
}

export default Seven