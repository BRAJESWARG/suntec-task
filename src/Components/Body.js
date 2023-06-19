import React from 'react'
import ImgOne from './img/bodyImg1.png';
import ImgTwo from './img/bodyImg2.png';
import Female from './img/female.jpg';

const Body = () => {
    return (
        <div className='Body' >
            <div className='body-col1' >
                <img src={ImgOne} alt='Img1' className='image-body' />
            </div>
            <div className='body-col2' >
                <img src={Female} alt='female' className='female-body' />
                <div className='annete' >
                    <span>ANNETE</span>
                    <span>SMITH</span>
                </div>
                <div className='something1' >
                    Something
                </div>
                <div className='something2' >
                    Something
                </div>
                <div className='something3' >
                    Something
                </div>
            </div>
            <div className='body-col3' >
                <img src={ImgTwo} alt='Img1' className='image-body' />
            </div>
        </div>
    )
}

export default Body