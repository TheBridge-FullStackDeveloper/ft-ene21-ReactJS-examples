import './App.css';
import HeaderF from './components/Header/HeaderF';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  let myBrand = "FyF"; // Hardcoded

  const setBrand = (newBrand) => {
    // myBrand = newBrand;
  }

  /* JSX */
  return (
    <div className="App">
      <HeaderF myBrand={myBrand} setBrand={setBrand} />
      <Main />
      <Footer brand={myBrand} />
    </div>
  );
}

export default App;