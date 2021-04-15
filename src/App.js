import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {

  const myBrand = "FyF"; // Hardcoded

  /* JSX */
  return (
    <div className="App">
      <Header brand={myBrand} />
      <Main />
      <Footer brand={myBrand} />
    </div>
  );
}

export default App;