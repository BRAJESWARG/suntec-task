import React from 'react';
import ImgOne from './img/img1.jpg';
import ImgTwo from './img/img2.jpg';
import ImgThree from './img/img3.jpg';
import ImgFour from './img/img4.jpg';

const Header = () => {
    return (
        <div className='Header'>
            <div className='image-row1' >
                <img src={ImgOne} alt='Img1' className='image-header' />
                <img src={ImgTwo} alt='Img2' className='image-header' />
            </div>
            <div className='image-row2' >
                <img src={ImgThree} alt='Img3' className='image-header' />
                <img src={ImgFour} alt='Img4' className='image-header' />
            </div>
            <h1 className='customers-text'>CUSTOMERS JOURNEY</h1>
        </div>
    )
}

export default Header