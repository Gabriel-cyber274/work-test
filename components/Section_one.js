import first from '../styles/first.module.css';
import React, {useState} from "react"
import Image from 'next/image';
import codeI from '../images/img1.PNG'
import Second from './Section_two';

function First() {
    const [animation, setanimation] = useState(false);

    const handlemouseE = ()=> {
        setanimation(true)
    }

    const handlemouseL =()=> {
        setanimation(false)
    }

  return (
    <div className={first.section1}>
        <div className={first.sectionD}>
            <div className={first.textC}>
                <h1>Secure IT Solutions for a more secure 
                    environment
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiumod tempor incideient ut labbore et olore magna aliwua. Ouis
                    ipsum suspensidssed ultives gravuda
                </p>
                <div className={first.getC}>
                    <div className={first.get} onMouseEnter={handlemouseE} onMouseLeave={handlemouseL}>
                        <div className={`${first.hoverC} ${animation && first.inline}`}>
                            <div className={first.hover1}></div>
                            <div className={first.hover2}></div>
                        </div>
                        <div className={first.hoverT}>
                            <h4>GET STARTED</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className={first.centerF}>
                <div className={first.image}>
                    <Image src={codeI} alt= 'gg' />
                </div>
            </div>
        </div>
        <Second />
    </div>
  )
}

export default First