import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useContext } from 'react';
import { PopUp } from './components/PopUp';
import { PopUpContext } from './context/PopUpContext';


function App() {

  const { popUpState, popUpContentState } = useContext(PopUpContext);
  const [popUp, setPopUp] = popUpState;
  const [popUpContent, setPopUpContent] = popUpContentState;

  AOS.init({ duration: 2000 });
  return (
    <div className="App">
      <Home />
      <PopUp />
    </div>
  );
}

export default App;
