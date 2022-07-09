import Image from "next/image"
import Link from 'next/link';
import logo from '../images/Glogo.svg'
import navS from '../styles/nav_style.module.css'
import React, {useState, useEffect} from "react"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    const [animation, setanimation] = useState(false)
    const [change, setchange] = useState(false)
    const [support, setsupport] = useState(false)
    const [navC, setnavC] = useState(false)
    const [navC2, setnavC2] = useState(false)
    const [togg, settogg] = useState(false)
    const [overlay, setoverlay] = useState(false)
    const [rotate, setrotate] = useState(false)


    const handlemouseE = ()=> {
        setanimation(true);
        setTimeout(() => {
            setchange(true)
        }, 500);
        setTimeout(() => {
            setanimation(false);

        }, 800);
    }
    
    const handlemouseL =()=> {
        setanimation(false);
        setchange(false);
    }


    const handlemouseE2 = ()=>{
        setsupport(true);
    }

    const handlemouseL2 =()=> {
        setsupport(false)
    }

    const handleclick = ()=> {
        if(overlay === true) {
            setoverlay(false);
        }else {
            setoverlay(true);
        }

        if(rotate === true) {
            setrotate(false)
        }else {
            setrotate(true)
        }
    }


    useEffect(()=>{
        let query = window.matchMedia('(min-width:576px) and (max-width: 767px)');
        let query2 = window.matchMedia('(min-width:768px)');
        let query3 = window.matchMedia('(max-width:767px)')
        let query4 = window.matchMedia('(min-width: 992px)')
        
        setInterval(() => {
            if(query.matches) {
                setnavC(true)        
            }
            else if(query4.matches) {
                setnavC(true)
            }
            else{
                setnavC(false)
            }
        }, 100);

        setInterval(() => {
            if(query2.matches) {
                setnavC2(true)        
            }else{
                setnavC2(false)
            }
        }, 100);

        
        setInterval(() => {
            if(query3.matches) {
                settogg(true)        
            }else{
                settogg(false)
            }
        }, 100);

        
    
    })


  return (
    <>
        <nav className={navS.nav}>
            <Image src={logo} width='40' height='40' />
            <div className={navS.nav_part}>
                {navC2 &&
                    <ul className={navS.ul}>
                        <Link href='/'><li>Home</li></Link>
                        <li>About</li>
                        <li>Pages</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                }
                <Link href='/cart'>
                    <div className={navS.cartC}>
                        <FontAwesomeIcon icon={faShoppingCart} width='20' height='20' />
                        <div>0</div>
                    </div>
                </Link>
                {navC && 
                    <div className={navS.supC} onMouseEnter={handlemouseE2} onMouseLeave={handlemouseL2}>
                        <div className={`${navS.supAC} ${support && navS.sup}`} >
                            <div className={navS.supCP1}></div>
                            <div className={navS.supCP2}></div>
                        </div>
                        <div className={navS.supCT}>
                            <h4>support</h4>
                        </div>
                    </div>
                }
                <div className={`${navS.login} ${change && navS.green}`} onMouseEnter={handlemouseE} onMouseLeave={handlemouseL}>
                    LOGIN
                    <div className={`${navS.hoverC} ${animation && navS.hover}`}>
                        <div className={`${navS.hover1}`}></div>
                        <div className={`${navS.hover2}`}></div>
                    </div>
                </div>
                {togg &&
                    <div className={navS.toogler} onClick={handleclick}>
                        <div className= {`${navS.toogle} ${navS.topT} ${rotate && navS.rotateT}`}></div>
                        <div className={`${navS.toogle} ${navS.centerT} ${rotate && navS.rotateT2}`}></div>
                        <div className={`${navS.toogle} ${navS.bottomT} ${rotate && navS.rotateT3}`}></div>
                    </div>
                }
            </div>
        </nav>
        {overlay && <div className={navS.tooglerS}>
            <Link href='/'><h3>Home</h3></Link>
            <h3>Shop</h3>
        </div>}
    </>
  )
}

export default Navbar