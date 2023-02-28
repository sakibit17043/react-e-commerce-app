import './App.css';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Shop from './Pages/Shop/Shop';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='px-12 mt-12'>
      <Shop></Shop>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
