import logo from './logo.svg';
import './App.css';
//import bootstrap from 'bootstrap';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import About from './components/About';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Teams from './components/Teams';
import Arrival from './components/Arrival'; 
import Services from './components/Services';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import FeaturedProduct from './screens/FeaturedProduct';
function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <HomeScreen />
    <Categories />
    <About />
    <FeaturedProduct />
    <Gallery />
    <Teams />
    <Arrival />
    <Services />
    <Footer />
    </div>
  );
}

export default App;
