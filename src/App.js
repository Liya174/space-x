import React from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Feature from './components/Feature/feature';
import Footer from './components/Footer/footer';

import FetchData from './service/FetchData';

import './style.css';

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],

  };

  componentDidMount() {
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name)})
        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({rocketFeatures}));
  }

  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket)
  }
  
  render() {
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
        <Main rocket={this.state.rocket} />
        <Feature />
        <Footer />
      </> 
    );
  }
}

export default App;
