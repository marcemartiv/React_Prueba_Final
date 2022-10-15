import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Route , Routes } from "react-router-dom";
import {PizzasProvider} from "./context/PizzasProvider";
import Navbar from "./components/Navbar";
import Detalle from "./views/Detalle";
import Carrito from "./views/Carrito";
import Home from "./views/Home";
import Error from "./views/Error";


function App() {
  return (
  <BrowserRouter>
    <PizzasProvider>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pizzas/:id" element={<Detalle />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="*" element={<Error />} />
     </Routes>
    </PizzasProvider>
  </BrowserRouter>
  );
}

export default App;
