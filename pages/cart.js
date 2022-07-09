import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import cartS from '../styles/cart.module.css'

function cart() {
    const [shopping, setshopping] = useState(false)
    const [update, setupdate] = useState(false)

    const handlemouseE =()=> {
        setshopping(true)
    }

    const handlemouseL = ()=> {
        setshopping(false)
    }

    
    const handlemouseE2 =()=> {
        setupdate(true)
    }

    const handlemouseL2 = ()=> {
        setupdate(false)
    }


  return (
    <div>
        <Navbar />
        <div className={cartS.cartM}>
            <h1>Cart</h1>
        </div>
        <div className={cartS.cartB}>
            <div className={cartS.scrollC}>
                <div className={cartS.scroll}>
                    <ul className={cartS.ulB}>
                        <li>Product</li>
                        <li>Name</li>
                        <li>Unit price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                    </ul>
                    <div className={cartS.productC}>
                        <h3>Empty</h3>
                    </div>
                </div>
            </div>
            <div className={cartS.buttonC}>
                <div className={cartS.shoppingC} onMouseEnter={handlemouseE} onMouseLeave={handlemouseL}>
                    <div className={`${cartS.purpleC} ${shopping && cartS.show}`}>
                        <div className={cartS.purple1}></div>
                        <div className={cartS.purple2}></div>
                    </div>
                    <div className={cartS.textC}>
                        <h3>CONTINUE SHOPPING</h3>
                    </div>
                </div>

                <div className={cartS.updateC} onMouseEnter={handlemouseE2} onMouseLeave={handlemouseL2}>
                    <div className={`${cartS.purpleC} ${update && cartS.show}`}>
                        <div className={cartS.purple1}></div>
                        <div className={cartS.purple2}></div>
                    </div>
                    <div className={cartS.textC}>
                        <h3>UPDATE CART</h3>
                    </div>
                </div>
            </div>
            <div className={cartS.cartTC}>
                <h3>Cart totals</h3>
                <div>
                    <div className={cartS.ulC}>
                        <ul>
                            <li>Subtotal</li>
                            <li>$0.00</li>
                        </ul>
                    </div>
                    <div className={cartS.ulC}>
                        <ul>
                            <li>Shipping</li>
                            <li>$10.00</li>
                        </ul>
                    </div>
                    <div className={cartS.ulC}>
                        <ul>
                            <li>Total</li>
                            <li>$10.00</li>
                        </ul>
                    </div>
                </div>
                <button className={cartS.check}>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default cart