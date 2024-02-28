import React from 'react';
import AwardImage from './../assests/2.png';
const AwardInfoComponent = () => {
    return (
        <div style={{ textAlign: 'left', padding: '20px' }}>
            <h3 style={{ textAlign: 'center', padding: '20px' }}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            
            <ul>
                <li style={{ textAlign: 'left', padding: '5px' }}>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li style={{ textAlign: 'left', padding: '5px' }}>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
            </ul>

            <img src={AwardImage} alt="Award" style={{ maxWidth: '100%', height: 'auto' }} />

            <p>
                Government of India has awarded the <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
        </div>
    );
}

export default AwardInfoComponent;
