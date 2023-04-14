import Router from './All_Routes/Router';
import './App.css';
import Navbar from './Components/Navbar_Component/Navbar';
import Footer from './Components/Footer_Component/Footer';
function App() {
  const Gotop=()=>{
    const options = {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
    window.scrollTo(options);
  }

  return (
    <div className='app'>
    <div className='navbar'> <Navbar/></div>
     <Router/>
     <Footer/>
    </div>
  );
}

export default App;
