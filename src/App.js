import products from "./assets/fake-data/products";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Food from "./components/Food/Food";
import Individual from "./components/Individual Food/Individual";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/Checkout/CheckOut";
import {BrowserRouter} from 'react-router-dom'

function App() {
  console.log(products)
  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/foods' exact element={<Food/>}></Route>
          <Route path='/cart' exact element={<Cart/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>
          <Route path='foods/id=:foodID' exact element={<Individual/>}></Route>
          <Route path='/checkout' exact element={<CheckOut/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
