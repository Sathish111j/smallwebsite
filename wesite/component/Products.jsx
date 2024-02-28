import React from 'react';

const Products = () => {
    const redBarStyle = { color: 'red' };

    return (
        <div style={{ textAlign: 'center' }}>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            <div style={{ height: '2px', backgroundColor: 'red', width: '99%', margin: '0 auto 10px' }}></div> {/* Red line */}
            <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
            <p>
                CHEMICALS <span style={redBarStyle}>|</span> PROCESS <span style={redBarStyle}>|</span> POWER <span style={redBarStyle}>|</span> WATER <span style={redBarStyle}>|</span> WASTE WATER <span style={redBarStyle}>|</span> OILS <span style={redBarStyle}>|</span> GAS <span style={redBarStyle}>|</span> PHARMA <span style={redBarStyle}>|</span> SUGARS <span style={redBarStyle}>|</span> DISTILLERIES <span style={redBarStyle}>|</span> PAPER <span style={redBarStyle}>|</span> PULP <span style={redBarStyle}>|</span> MARINE <span style={redBarStyle}>|</span> DEFENCE <span style={redBarStyle}>|</span> METAL <span style={redBarStyle}>|</span> MINING <span style={redBarStyle}>|</span> FOOD <span style={redBarStyle}>|</span> BEVERAGE <span style={redBarStyle}>|</span> PETROCHEMICAL <span style={redBarStyle}>|</span> REFINERIES <span style={redBarStyle}>|</span> SOLAR <span style={redBarStyle}>|</span> BUILDING <span style={redBarStyle}>|</span> HVAC <span style={redBarStyle}>|</span> FIRE FIGHTING <span style={redBarStyle}>|</span> AGRICULTURE <span style={redBarStyle}>|</span> RESIDENTIAL
            </p>
        </div>
    );
}

export default Products;
