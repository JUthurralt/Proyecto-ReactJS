import { Link } from "react-router-dom";

const Item = ({ detalle }) => {
  return (
    <div id="itemEstilo" key={detalle.key} style={{ height: 590}}>
      <img src={detalle.img} className="imgItem" alt={detalle.nombre}></img>
      <p className="marca"> {detalle.marca}</p>
      <p className="nombre">{detalle.nombre}</p>
      <p className="precio">$
                    {detalle.precio}</p>
      <p>{detalle.stock} disponibles</p>
      <Link to={`/detalle/${detalle.id}`}>
        <button className="button">Ver producto</button>
      </Link>
    </div>
  );
};
export default Item;
