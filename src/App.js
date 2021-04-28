import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Main from './components/Main/main'

function App() {
  return (
    <div className="App">
      <Header/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a name='home'
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>
        <p>jjjj</p>

      </header> 
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
