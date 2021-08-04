import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart'
import { CartProvider } from 'react-use-cart'

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
