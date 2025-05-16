import './App.css';

import Preloader from './components/Preloader';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Banner />
      <Services />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
