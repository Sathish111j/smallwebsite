import logo from './../assests/logo.png';
const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px'
        }}>
            <img src={logo} alt="Logo" style={{ height: '80%' }} />
        </header>
    );
}

export default Header;
