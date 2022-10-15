import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import PizzasContext from "../context/PizzasProvider";



const Detalle = () => {
  
    const [pizzaDetalle, setDetalle] = useState({});
    const {pizzas, addCar} = useContext(PizzasContext);
    const {id} = useParams();

    const obtenerDatos = () => {
        const datosPizza = pizzas.find((pizza) => pizza.id === id);
        setDetalle(datosPizza);
    };

    useEffect(() => {
        obtenerDatos();
    }, [pizzas]);


  return (
    <>
      
      <div className="container mt-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={pizzaDetalle.img}
                className="img-fluid"
                alt={pizzaDetalle.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {pizzaDetalle.name}
                </h5>
                <p className="card-text">{pizzaDetalle.desc} </p>
                <ul>
                  {pizzaDetalle.ingredients?.map((ingredient, i) => (
                    <li key={i}>🍕 {ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${pizzaDetalle.price} </h4>
                  <button
                    className="btn btn-danger"
                    onClick={() => addCar(pizzaDetalle)}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detalle