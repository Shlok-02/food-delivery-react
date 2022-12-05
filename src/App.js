import products from "./assets/fake-data/products";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Food from "./components/Food/Food";
function App() {
  console.log(products)
  return (
    <div>
     <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/foods' exact element={<Food/>}></Route>
        <Route path='/contact' exact element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
