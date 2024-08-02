
import './App.css'
import Products from './components/Products'
import Homepage from './components/Homepage'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About'
import Details from './components/Details'
function App() {
  

  return (
    <>
     <BrowserRouter>
<Navigation/>

 <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:id" element={<Details/>}></Route>
 </Routes>
</BrowserRouter> 
    </>
  );
}

export default App
