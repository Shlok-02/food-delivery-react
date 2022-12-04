import products from "./assets/fake-data/products";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
function App() {
  console.log(products)
  return (
    <div>
     <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/contact' exact element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
