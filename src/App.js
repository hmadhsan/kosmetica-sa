import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Teams from './components/Teams';
import Arrival from './components/Arrival'; 
import Services from './components/Services';
function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <Home />
    <Categories />
    <About />
    <Shop />
    <Gallery />
    <Teams />
    <Arrival />
    <Services />
    </div>
  );
}

export default App;
