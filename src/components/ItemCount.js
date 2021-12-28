import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial }) => {
  const [count, SetCount] = useState(0);
  // const [stock] =useState(3)
  const Agregar = ({}) => {
    if (stock > count) {
      SetCount(count + 1);
    } else {
      console.log("No hay stock");
    }
  };

  const Quitar = ({}) =>{
    if (count > initial){
        SetCount(count - 1);
    } else {
        console.log("No hay productos para quitar");
    }
  }

  const onAdd = ({}) =>{
      alert("Agregaste " + count + " items.");
  }
  return (
    <div id="producto">
      <div id="botones">
        <div className="agregar">
          <button onClick={Agregar}>+</button>
          <button onClick={Quitar}>-</button>
          <p>{count}</p>
        </div>
        <button onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
