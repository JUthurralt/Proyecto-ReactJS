import { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import "../ItemCount/ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const { contador, setContador } = useCartContext();
  const [count, setCount] = useState(0);
  const [initial] = useState(0);
  const [mensaje, setMensaje] = useState(false);
  const [hayStock, setHayStock] = useState(false);

  const Agregar = () => {
    if (stock > count) {
      setCount(count + 1);
      setContador(contador + 1);
    } else {
      setHayStock(!hayStock);
    }
  };

  const Quitar = () => {
    if (count > initial) {
      setCount(count - 1);
      setContador(contador - 1);
    } else {
      setMensaje(!mensaje);
    }
  };

  return (
    <div id="producto">
      <div id="contador">
        <div className="agregar">
          <button className="restar" onClick={Quitar}>
            -
          </button>
          <p className="cantidad">{count}</p>
          <button className="sumar" onClick={Agregar}>
            +
          </button>
        </div>
        <button className="agregado" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
        {mensaje ? <p>No tienes productos para eliminar</p> : null}
        {hayStock ? <p>No hay stock disponible</p> : null}
      </div>
    </div>
  );
};

export default ItemCount;
