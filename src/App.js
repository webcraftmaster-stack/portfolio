import './App.css';

import Preloader from './components/Preloader';
import Header from './components/Header';
import HeaderFixed from './components/HeaderFixed';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <HeaderFixed />
      <Banner />
    </div>
  );
}

export default App;
