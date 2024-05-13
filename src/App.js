import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ProductPage from "./Pages/ProductsPage"
import ServicePage from "./Pages/ServicePage"
import { BrowserRouter as BR, Routes, Route  } from "react-router-dom"
import Navbar from './Components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyCounter from './Pages/MyCounter';
import WelcomeUser from './Pages/WelcomeUser';
import ReactHookForm from './Pages/ReactHookForm';
import RandomUsers from './Pages/RandomUsers';
import MainComponent from './UseContext/MainComponent';
import ExampleUseMemo from './UseMemo/ExampleUseMemo';
import ExampleUseReducer from './useReducer/ExampleUseReducer';
import ExampleNews from './NewsAPI/ExampleNews';


function App() {
  const notify = () => toast("Hello world message")
  const notify2 = () => toast("Hello world message twice")

  return (
    <div className="App">
        <h1>Hello world</h1>
        <button type='button' onClick={notify}>Click me to see the messsage</button>
        <button type='button' onClick={notify2}>Click me to see the messsage</button>
        <ToastContainer  />
      
        <BR>
        <Navbar />
          <Routes>
            <Route path="/home" element={ <MainComponent /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/product" element={ <ProductPage /> } />
            <Route path="/service" element={ <ServicePage /> } />
            <Route path="/count" element={ <MyCounter /> } />
            <Route path="/welcome" element={ <WelcomeUser /> } />
            <Route path="/rhf" element={ <ReactHookForm/> } />
          </Routes>
        </BR>
        {/* <ExampleUseMemo /> */}
        {/* <RandomUsers /> */}
        {/* <ExampleUseReducer /> */}
        <ExampleNews />
        
    </div>
  );
}

export default App;
