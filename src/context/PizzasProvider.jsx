import { createContext, useEffect, useState } from "react";

const PizzasContext = createContext();

const PizzasProvider = (props) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  //obterner pizza del json
  const endpoint = "json/pizzas.json";
  useEffect(() => {
    const getPizzas = async () => {
      const res = await fetch(endpoint);
      let pizzas = await res.json();

      setPizzas(pizzas);
      console.log(pizzas);
    };
    getPizzas();
  }, []);

  //   carrito añadir
  const addCar = ({ id, price, img, name }) => {
    const productoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, name, img, price, count: 1 };

    if (productoIndex >= 0) {
     
      carrito[productoIndex].count++;
        
      setCarrito([...carrito]);
      //alert("Pizza añadida");
    } else {
       alert("Pizza se encuentra en el carrito");
      setCarrito([...carrito, producto]);
       
    }
  };

  //   boton aumentar
  const increase = (i) => {
    carrito[i].count++; 
      
    setCarrito([...carrito]);
  };

  // boton disminuir
  const diminish = (i) => {
    const { count } = carrito[i];

    if (count === 0) {
      carrito.slice(i, 1);
    } else {
     carrito[i].count--;
    }
    setCarrito([...carrito]);
  };
  //console.log(carrito);

  return (
    <PizzasContext.Provider
      value={{ pizzas, carrito, setCarrito, addCar, increase, diminish }}
    >
      {props.children}
    </PizzasContext.Provider>
  );
};
  export { PizzasProvider };

export default PizzasContext;
