import './App.css';

import Preloader from './components/Preloader';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Banner />
      <Services />
      <Portfolio />
      <About />
      <Resume />
    </div>
  );
}

export default App;
