import Rewardimg from './../assests/1.png';

const Reward = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
                src={Rewardimg} 
                alt="Reward" 
                style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100vh', 
                    height: 'auto', 
                    float: 'left' 
                }} 
            />
        </div>
    );
}

export default Reward;
