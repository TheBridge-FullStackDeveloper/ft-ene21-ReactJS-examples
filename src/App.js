import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {

  let myBrand = "FyF"; // Hardcoded

  const setBrand = (newBrand) => {
    // myBrand = newBrand;
  }

  /* JSX */
  return (
    <div className="App">
      <Header myBrand={myBrand} setBrand={setBrand} />
      <Main />
      <Footer brand={myBrand} />
    </div>
  );
}

export default App;