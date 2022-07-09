import React, {useState} from 'react';
import thirdS from '../styles/hosting.module.css';

function Content() {
  const [hover, sethover] = useState(false);
  const [hover2, sethover2] = useState(false);
  const [hover3, sethover3] = useState(false);
  const [hover4, sethover4] = useState(false);
  const [hover5, sethover5] = useState(false);
  const [hover6, sethover6] = useState(false);
  const [hover7, sethover7] = useState(false);
  const [hover8, sethover8] = useState(false);

  const handlemouseE= ()=> {
    sethover(true);
  }
  const handlemouseL =()=> {
    sethover(false)
  }

  const handlemouseE2= ()=> {
    sethover2(true);
  }
  const handlemouseL2 =()=> {
    sethover2(false)
  }


    const handlemouseE3= ()=> {
    sethover3(true);
  }
  const handlemouseL3 =()=> {
    sethover3(false)
  }

    const handlemouseE4= ()=> {
    sethover4(true);
  }
  const handlemouseL4 =()=> {
    sethover4(false)
  }

    const handlemouseE5= ()=> {
    sethover5(true);
  }
  const handlemouseL5 =()=> {
    sethover5(false)
  }

    const handlemouseE6= ()=> {
    sethover6(true);
  }
  const handlemouseL6 =()=> {
    sethover6(false)
  }

    const handlemouseE7= ()=> {
    sethover7(true);
  }
  const handlemouseL7 =()=> {
    sethover7(false)
  }

  const handlemouseE8= ()=> {
    sethover8(true);
  }
  const handlemouseL8 =()=> {
    sethover8(false)
  }
  return (
    <div className={thirdS.contentC}>
    <div className={`${thirdS.content} ${hover && thirdS.animate}`} onMouseEnter={handlemouseE} onMouseLeave={handlemouseL}>
        <div className={`${thirdS.hoverE} ${hover && thirdS.show}`}></div>
    </div>
    <div className={`${thirdS.content} ${hover2 && thirdS.animate}`} onMouseEnter={handlemouseE2} onMouseLeave={handlemouseL2}>
        <div className={`${thirdS.hoverE} ${hover2 && thirdS.show}`}></div>
    </div>
    <div className={`${thirdS.content} ${hover3 && thirdS.animate}`} onMouseEnter={handlemouseE3} onMouseLeave={handlemouseL3}>
        <div className={`${thirdS.hoverE} ${hover3 && thirdS.show}`}></div>
    </div>
    <div className={`${thirdS.content} ${hover4 && thirdS.animate}`} onMouseEnter={handlemouseE4} onMouseLeave={handlemouseL4}>
        <div className={`${thirdS.hoverE} ${hover4 && thirdS.show}`}></div>
    </div>
    <div className={`${thirdS.content} ${hover5 && thirdS.animate}`} onMouseEnter={handlemouseE5} onMouseLeave={handlemouseL5}>
        <div className={`${thirdS.hoverE} ${hover5 && thirdS.show}`}></div>
    </div>
    <div className={`${thirdS.content} ${hover6 && thirdS.animate}`} onMouseEnter={handlemouseE6} onMouseLeave={handlemouseL6}>
        <div className={`${thirdS.hoverE} ${hover6 && thirdS.show}`}></div>
    </div>
    <div className={`${thirdS.content} ${hover7 && thirdS.animate}`} onMouseEnter={handlemouseE7} onMouseLeave={handlemouseL7}>
        <div className={`${thirdS.hoverE} ${hover7 && thirdS.show}`}></div>
    </div>
    <div className={`${thirdS.content} ${hover8 && thirdS.animate}`} onMouseEnter={handlemouseE8} onMouseLeave={handlemouseL8}>
        <div className={`${thirdS.hoverE} ${hover8 && thirdS.show}`}></div>
    </div>
</div>
  )
}

export default Content