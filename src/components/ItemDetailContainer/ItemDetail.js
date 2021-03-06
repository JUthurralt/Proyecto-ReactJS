import "../ItemDetailContainer/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({ info }) => {
  const [show, setShow] = useState(true);
  const {agregarAlCarrito } = useCartContext()


  const onAdd = (count) => {
    setShow(false);
    agregarAlCarrito( {...info, cantidad: count} )
  };

  return (
    <div className="itemDetail">
      <div className="contenedorImagen">
        <img src={info.img} className="imgDetail" alt={info.nombre}></img>
      </div>
      <div className="contenedorInfo">
        <div>
          <h3>
            Zapatillas {info.marca} {info.nombre}{" "}
          </h3>
        </div>
        <div className="precio-stock">
          <p>$
            {info.precio}</p>
          <p>
            Stock:
            {info.stock}
          </p>
        </div>
        <div>
          <h4>Talles </h4>
          <div className="talles">
            <p className="talle">36</p>
            <p className="talle">37</p>
            <p className="talle">38</p>
            <p className="talle">39</p>
            <p className="talle">40</p>
            <p className="talle">41</p>
            <p className="talle">42</p>
            <p className="talle">43</p>
            <p className="talle">44</p>
          </div>
        </div>
        {show ? (
        <ItemCount stock={info.stock} onAdd={onAdd}></ItemCount>
      ) : (
        <div className="counter">
          <Link to="/cart">
            <button className="carrito">Ir al carrito</button>
          </Link>
          <Link to="/">
            <button className="seguir">Seguir Comprando</button>
          </Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default ItemDetail;
