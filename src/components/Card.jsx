import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import PizzasContext from "../context/PizzasProvider";
import { formatNumber } from "../puntos/formatNumber";



const Card = () => {
    const {pizzas, addCar} = useContext(PizzasContext);

    const navigate = useNavigate();
   

  return (
    <>
      {pizzas.map((pizzas) => (
        <div key={pizzas.id}>
          <div className="card-body borde">
            <div className="col-md-4">
              <img
                className="img-fluid rounded-start mx-5 mt-5 w-100"
                src={pizzas.id}
                alt=""
              />
            </div>
            <h4 className="card-title text-capitalize">
              {" "}
              Pizza {pizzas.name}{" "}
            </h4>
            <hr />
            <p className="card-text">
              <b>Ingredientes:</b>
            </p>
            <ul>
              {pizzas.ingredients.map((ingredient, i) => (
                <li key={i}>🍕 {ingredient}</li>
              ))}
            </ul>
          </div>
          <h2 className="text-center text-dark pb-3">
            Precio: ${formatNumber(pizzas.price)}
          </h2>
          <div className="d-flex justify-content-around mb-4">
            <button
              to={`pizzas/${pizzas.id}`}
              className="btn btn-info text-white"
              onClick={() => navigate(`/pizzas/${pizzas.id}`)}
            >
              ver mas
            </button>

            <button className="btn btn-danger" onClick={() => addCar(pizzas)}>
              Añadir
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card