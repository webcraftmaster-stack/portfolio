import './App.css';

import Preloader from './components/Preloader';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
