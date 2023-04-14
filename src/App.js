import Router from './All_Routes/Router';
import './App.css';
import Navbar from './Components/Navbar_Component/Navbar';
import Footer from './Components/Footer_Component/Footer';
function App() {
  

  return (
    <div className='app'>
    <div className='navbar'> <Navbar/></div>
     <Router/>
     <Footer/>
    </div>
  );
}

export default App;
