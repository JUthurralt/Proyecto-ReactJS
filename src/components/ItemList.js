import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div id="containerItems">
      {productos.map((item) => (
        <Item detalle={item} key={item.key}></Item>
      ))}
    </div>
  );
};

export default ItemList;
