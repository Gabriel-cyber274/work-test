import offer from '../styles/offer.module.css'
import React, {useState} from 'react'

function Second({ fit }) {
    const [gradient, setgradient] = useState(false);
    const [gradient2, setgradient2] = useState(false);
    const [gradient3, setgradient3] = useState(false);
    const [gradient4, setgradient4] = useState(false);
    const [gradient5, setgradient5] = useState(false);
    const [gradient6, setgradient6] = useState(false);

    const handlemouseE = ()=>{
        setgradient(true)
    }

    const handlemouseL = ()=> {
        setgradient(false)
    }

    const handlemouseE_2 = ()=>{
        setgradient2(true)
    }

    
    const handlemouseL_2 = ()=> {
        setgradient2(false)
    }

    const handlemouseE_3 = ()=>{
        setgradient3(true)
    }

    
    const handlemouseL_3 = ()=> {
        setgradient3(false)
    }

    
    const handlemouseE_4 = ()=>{
        setgradient4(true)
    }

    
    const handlemouseL_4 = ()=> {
        setgradient4(false)
    }

    
    const handlemouseE_5 = ()=>{
        setgradient5(true)
    }

    
    const handlemouseL_5 = ()=> {
        setgradient5(false)
    }

    
    const handlemouseE_6 = ()=>{
        setgradient6(true)
    }

    
    const handlemouseL_6 = ()=> {
        setgradient6(false)
    }

    if(fit) {
    return (
    <div className={offer.contain}>
        <div className={offer.container}>
            <div className={`${offer.offers} ${offer.remove} ${gradient && offer.trans}`} onMouseEnter={handlemouseE} onMouseLeave={handlemouseL}>
            </div>
            <div className={`${offer.offers}  ${offer.remove} ${gradient2 && offer.trans} `} onMouseEnter={handlemouseE_2} onMouseLeave={handlemouseL_2}>
            </div>
            <div className={`${offer.offers} ${offer.remove} ${gradient3 && offer.trans}`} onMouseEnter={handlemouseE_3} onMouseLeave={handlemouseL_3}>
            </div>
            <div className={`${offer.offers} ${offer.remove} ${gradient4 && offer.trans}`} onMouseEnter={handlemouseE_4} onMouseLeave={handlemouseL_4}>
            </div>
            <div className={`${offer.offers} ${offer.remove} ${gradient5 && offer.trans}`} onMouseEnter={handlemouseE_5} onMouseLeave={handlemouseL_5}>
            </div>
            <div className={`${offer.offers} ${offer.remove} ${gradient6 && offer.trans}`} onMouseEnter={handlemouseE_6} onMouseLeave={handlemouseL_6}>
            </div>
        </div>
    </div>
    )
    }
    return (
    <div className={offer.contain}>
        <div className={offer.container}>
            <div className={`${offer.offers} ${gradient && offer.trans}`} onMouseEnter={handlemouseE} onMouseLeave={handlemouseL}>
                <div className={`${offer.grad1} ${gradient && offer.grad}`}></div>
            </div>
            <div className={`${offer.offers} ${gradient2 && offer.trans}`} onMouseEnter={handlemouseE_2} onMouseLeave={handlemouseL_2}>
                <div className={`${offer.grad1} ${gradient2 && offer.grad}`}></div>
            </div>
            <div className={`${offer.offers} ${gradient3 && offer.trans}`} onMouseEnter={handlemouseE_3} onMouseLeave={handlemouseL_3}>
                <div className={`${offer.grad1} ${gradient3 && offer.grad}`}></div>
            </div>
            <div className={`${offer.offers} ${gradient4 && offer.trans}`} onMouseEnter={handlemouseE_4} onMouseLeave={handlemouseL_4}>
                <div className={`${offer.grad1} ${gradient4 && offer.grad}`}></div>
            </div>
        </div>
    </div>
  )
}

export default Second