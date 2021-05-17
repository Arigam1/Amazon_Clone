import React from 'react';
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

const CHeckout = () => {

    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' />
                <div>
                    <h2 className='checkout__title'>
                        Your shopping Basket
                    </h2>
                    {basket.map((i) => <CheckoutProduct
                        title={i.title}
                        id={i.id}
                        price={i.price}
                        rating={i.rating}
                        image={i.image} />)}
                </div>
            </div>
            <div className='checkout__right'>
                <h2>
                    <Subtotal />
                </h2>
            </div>
        </div>
    );
};

export default CHeckout;