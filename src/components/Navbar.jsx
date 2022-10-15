import { useContext } from "react";
import PizzasContext from "../context/PizzasProvider";
import { Link } from "react-router-dom";
import { formatNumber } from "../puntos/formatNumber";


const Navbar = () => {
  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce(
    (valorAnterior, { count, price }) => (valorAnterior + price) * count,
    0
  );
  return (
    <nav className="navBar p-3 mt-2">
      <Link to="/" className="link mx-3">
        <h4>🍕 Pizzeria Mama Mia!</h4>
      </Link>

      <Link to="/carrito" className="link mx-3 ">
        <h5>🛒​ ${formatNumber(total)}</h5>
      </Link>
    </nav>
  );
};


export default Navbar