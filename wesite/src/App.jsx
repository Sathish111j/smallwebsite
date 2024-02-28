import React from 'react';
import Reward from './../component/Reward.jsx';
import Header from './../component/Header.jsx';
import Footer from './../component/Footer.jsx';
import Products from './../component/Products.jsx';
import Productsimg from './../component/ProductImage.jsx';
import AwardInfo from './../component/AwardInfoComponent.jsx';



function App() {

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(white, rgb(255, 249, 178))'
  };

  const flexContainerStyle = {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row', 
    flexWrap: 'wrap' 
  };

  const rewardStyle = {
    flex: 1, 
    minWidth: '300px'
  };

  const awardInfoStyle = {
    flex: 2,
    minWidth: '300px'
  };

  return (
    <div style={containerStyle}>
      <Header/>
      <div style={flexContainerStyle}>
        <div style={rewardStyle}>
          <Reward/>
        </div>
        <div style={awardInfoStyle}>
          <AwardInfo/>
        </div>
      </div>
      <Productsimg/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
