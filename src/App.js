import React from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Feature from './components/Feature/feature';
import Footer from './components/Footer/footer';
import Calendar from './components/Calendar/calendar';
import Details from './components/Details/details';

import './style.css';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Feature />
      {/*<Calendar />s
      <Details /> */}
      <Footer />
    </> 
  );
}

export default App;
