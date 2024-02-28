import React from 'react';

import productimg from './../assests/3.png';
const ImageComponent = () => {
    return (
        <div>
            <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' ,textAlign: 'center' }}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                    src={productimg} 
                    alt="Sample" 
                    style={{ 
                        maxWidth: '95vw',
                        maxHeight: '40vh', 
                        width: 'auto', 
                        height: 'auto' 
                    }} 
                />
            </div>
        </div>
    );
}

export default ImageComponent;
