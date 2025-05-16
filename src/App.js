import './App.css';

import Preloader from './components/Preloader';
import Header from './components/Header';
import HeaderFixed from './components/HeaderFixed';
import Banner from './components/Banner';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <HeaderFixed />
      <Banner />
      <Services />
    </div>
  );
}

export default App;
