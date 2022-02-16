import Item from "../ItemListContainer/Item";
import "../ItemListContainer/ItemList.css";
import Loader from "../ItemListContainer/Loader";

const ItemList = ({ productos, state  }) => {
  
  return (
    <div id="containerItems">
      {state ? 
        <Loader></Loader>
      :
      productos.map((item) => (
        <Item detalle={item} key={item.key}></Item>
      ))}
    </div>
  );
};

export default ItemList;
