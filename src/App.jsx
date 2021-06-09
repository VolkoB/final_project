import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Main from './components/Main/main'
import React from 'react';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
