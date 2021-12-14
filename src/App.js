import './App.css';
import LandingPage from './LandingPage/LandingPage'
import Routing from './Routing';
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
  );
}

export default App;
