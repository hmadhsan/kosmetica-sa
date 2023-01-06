import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
function App() {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <Home />
    <Categories />
    </div>
  );
}

export default App;
