import React from 'react'
import CartHeader from './CartHeader'
import ShoppingCart from './ShoppingCart'




const OrderButton = (cartFood) => {
    return (
        <div>
            <div>
                <CartHeader />
                <ShoppingCart  {...cartFood}/>
                <div name="vips" className="flex absolute visible h-40 bg-vipps"></div>
            </div>
        </div>
    )
}

export default OrderButton
