import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

function App() {

  /* JSX */
  return (
    <div className="App">
      <Header redro="6"/>
      <Header redro={{ id: "2", name: "pistachi" }} />
      <main>
        Hola Mundo, son las... {Date.now()}
      </main>
      <Footer order={ {id: "1", name: "chachi"} } />
      <Footer order="2" />
    </div>
  );
}

export default App;