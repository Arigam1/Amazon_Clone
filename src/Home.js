import React from 'react';
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                    className='home__image'
                />
                <div className='home__row'>
                    <Product title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore! Lorem ipsum dolor sit amet.'
                        image='https://olma.store/wp-content/uploads/2019/09/88673193_images_12218580087-1-1.jpg'
                        price={29.99}
                        rating={5} />
                    <Product title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore! Lorem ipsum dolor sit amet.'
                        image='https://olma.store/wp-content/uploads/2019/09/88673193_images_12218580087-1-1.jpg'
                        price={29.99}
                        rating={5} />                </div>
                <div className='home__row'>
                    <Product title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore! Lorem ipsum dolor sit amet.'
                        image='https://olma.store/wp-content/uploads/2019/09/88673193_images_12218580087-1-1.jpg'
                        price={29.99}
                        rating={5} />
                    <Product title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore! Lorem ipsum dolor sit amet.'
                        image='https://olma.store/wp-content/uploads/2019/09/88673193_images_12218580087-1-1.jpg'
                        price={29.99}
                        rating={5} />
                    <Product title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore! Lorem ipsum dolor sit amet.'
                        image='https://olma.store/wp-content/uploads/2019/09/88673193_images_12218580087-1-1.jpg'
                        price={29.99}
                        rating={5} />
                </div>
                <div className='home__row'>
                    <Product title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, inventore! Lorem ipsum dolor sit amet.'
                        image='https://olma.store/wp-content/uploads/2019/09/88673193_images_12218580087-1-1.jpg'
                        price={29.99}
                        rating={5} />                </div>
            </div>

        </div>
    );
};

export default Home;