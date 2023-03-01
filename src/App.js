import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Shop from './Pages/Shop/Shop';
export const CartContext = createContext('ring');
function App() {
  const [cart,setCart] = useState([]);
  const handleAddToCart = product =>{
    const newCart = [...cart,product];
    setCart(newCart);
    console.log(cart)
}

  return (
    <CartContext.Provider value={[cart,handleAddToCart]}>
      <div>
        <Navbar></Navbar>
        <div className='px-12 mt-12'>
          <Routes>
            <Route path="/" element={<Shop></Shop>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>

        </div>
        <Footer></Footer>
      </div>
    </CartContext.Provider>
  );
}

export default App;
