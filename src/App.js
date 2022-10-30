import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({ duration: 2000 });
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
