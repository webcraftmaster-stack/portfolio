import './App.css';

import Preloader from './components/Preloader';
import Header from './components/Header';
import HeaderFixed from './components/HeaderFixed';

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <HeaderFixed />
    </div>
  );
}

export default App;
